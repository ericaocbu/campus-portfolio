import { campus } from "./data/campus.js";

import { CampusMap } from "./components/CampusMap.js";
import { Navigation } from "./components/Navigation.js";
import { SectionView } from "./components/SectionView.js";
import { TourHUD } from "./components/TourHUD.js";

/* =====================================================
   APP SETUP
===================================================== */

const campusContainer = document.querySelector("#campus");

let campusMap = null;
let navigation = null;
let activeSection = null;

let navigationTimeout = null;
let tourHUD = null;

let tourActive = false;
let tourCompleted = false;
let currentTourIndex = 0;
let tourStopReady = false;

/* =====================================================
   GUIDED TOUR ORDER
===================================================== */

const tourOrder = [
  "main-campus",
  "library",
  "innovation-lab",
  "lecture-hall",
  "food-canteen",
  "utown",
];

/* =====================================================
   CAMPUS HELPERS
===================================================== */

function findCampusLocation(id) {
  return campus.locations.find((location) => location.id === id);
}

function clearNavigationTimeout() {
  if (navigationTimeout) {
    clearTimeout(navigationTimeout);
    navigationTimeout = null;
  }
}

function updateDirectoryHighlight(location) {
  if (navigation) {
    navigation.setActiveDestination(location);
  }
}

/*
 * Keep the tour button states synchronized.
 *
 * Also notify other parts of the portfolio, such as
 * the Home page tour button, through a custom event.
 */
function updateTourStatus(status) {
  if (navigation) {
    navigation.setTourButtonState(status);
  }

  window.dispatchEvent(
    new CustomEvent("portfolio:tour-status-change", {
      detail: { status },
    }),
  );
}

/* =====================================================
   NORMAL CAMPUS NAVIGATION
===================================================== */

function navigateTo(location) {
  clearNavigationTimeout();

  if (!location) {
    return;
  }

  updateDirectoryHighlight(location);

  /*
   * If the visitor navigates somewhere while
   * the guided tour is active, stop the tour.
   */
  if (tourActive) {
    stopTour(false);
  }

  campusMap.moveToLocation(location);

  navigationTimeout = setTimeout(() => {
    openSection(location);
    navigationTimeout = null;
  }, 650);
}

/* =====================================================
   SECTION NAVIGATION
===================================================== */

function handleSectionNavigation(event) {
  const locationId = event.detail?.locationId;

  if (!locationId) {
    return;
  }

  const location = findCampusLocation(locationId);

  if (!location) {
    console.warn(`Campus location "${locationId}" was not found.`);
    return;
  }

  navigateTo(location);
}

/* =====================================================
   OPEN NORMAL SECTION
===================================================== */

function openSection(location) {
  if (activeSection) {
    activeSection.remove();
  }

  activeSection = SectionView(location, closeSection, {
    tourActive: false,
    onStartTour: startTour,
    onNavigate: navigateTo,
  });

  document.body.appendChild(activeSection);

  requestAnimationFrame(() => {
    activeSection.classList.add("is-active");
  });
}

/* =====================================================
   CLOSE NORMAL SECTION
===================================================== */

function closeSection() {
  if (!activeSection) {
    return;
  }

  activeSection.classList.remove("is-active");

  const sectionToRemove = activeSection;

  setTimeout(() => {
    sectionToRemove.remove();

    if (activeSection === sectionToRemove) {
      activeSection = null;
    }

    if (!tourActive) {
      // Returning from a building resets the directory.
      updateDirectoryHighlight(null);
      campusMap.returnToPreviousPosition();
    }
  }, 450);
}

/* =====================================================
   START OR CONTINUE GUIDED TOUR
===================================================== */

function startTour() {
  /*
   * Never restart a tour that is already running.
   * The UI button can close its panel and leave the
   * visitor at the current stop.
   */
  if (tourActive) {
    return;
  }

  clearNavigationTimeout();

  /*
   * Close any section currently open.
   */
  if (activeSection) {
    activeSection.classList.remove("is-active");

    const sectionToRemove = activeSection;
    activeSection = null;

    setTimeout(() => {
      sectionToRemove.remove();
    }, 450);
  }

  /*
   * A completed tour can be replayed from the beginning.
   */
  tourActive = true;
  tourCompleted = false;
  currentTourIndex = 0;
  tourStopReady = false;

  updateTourStatus("active");

  /*
   * Tell Erica that the tour has started.
   *
   * Erica is already waiting at Student Campus,
   * so she does NOT walk there again.
   */
  window.dispatchEvent(
    new CustomEvent("portfolio:erica-tour", {
      detail: {
        action: "start",
      },
    }),
  );

  showTourStop();
}

/* =====================================================
   SHOW CURRENT TOUR STOP
===================================================== */

function showTourStop() {
  if (!tourActive) {
    return;
  }

  const currentLocation = findCampusLocation(tourOrder[currentTourIndex]);

  const nextLocation = findCampusLocation(tourOrder[currentTourIndex + 1]);

  if (!currentLocation) {
    finishTour();
    return;
  }

  updateTourHUD(currentLocation, nextLocation);
  updateDirectoryHighlight(currentLocation);

  /*
   * Move the camera to the destination.
   */
  campusMap.moveToLocation(currentLocation);

  /*
   * Student Campus is where Erica is already waiting.
   * Give her message time to be seen before opening.
   */
  if (currentLocation.id === "main-campus") {
    clearNavigationTimeout();

    navigationTimeout = setTimeout(() => {
      if (!tourActive) {
        return;
      }

      openTourSection(currentLocation);
      navigationTimeout = null;
    }, 1200);

    return;
  }

  /*
   * For every building, Erica walks there.
   * The building opens after Erica arrives.
   */
  window.dispatchEvent(
    new CustomEvent("portfolio:erica-tour", {
      detail: {
        action: "move",
        locationId: currentLocation.id,
      },
    }),
  );
}

/* =====================================================
   OPEN TOUR SECTION
===================================================== */

function openTourSection(location) {
  if (activeSection) {
    activeSection.remove();
  }

  updateDirectoryHighlight(location);

  tourStopReady = true;

  activeSection = SectionView(location, closeTourSection, {
    tourActive: true,
    onStartTour: startTour,
    onNavigate: navigateTo,
  });

  document.body.appendChild(activeSection);

  requestAnimationFrame(() => {
    activeSection.classList.add("is-active");
  });
}

/* =====================================================
   CLOSE TOUR SECTION
===================================================== */

function closeTourSection() {
  if (!activeSection) {
    return;
  }

  activeSection.classList.remove("is-active");

  const sectionToRemove = activeSection;
  activeSection = null;

  setTimeout(() => {
    sectionToRemove.remove();
  }, 450);
}

/* =====================================================
   TOUR HUD
===================================================== */

function updateTourHUD(currentLocation, nextLocation) {
  if (tourHUD) {
    tourHUD.remove();
    tourHUD = null;
  }

  tourHUD = TourHUD({
    currentIndex: currentTourIndex,
    totalStops: tourOrder.length,
    currentLocation,
    nextLocation,
    onNext: handleNextTourStop,
    onExit: () => stopTour(true),
  });

  document.body.appendChild(tourHUD);
}

/* =====================================================
   NEXT TOUR STOP
===================================================== */

function handleNextTourStop() {
  if (!tourActive || !tourStopReady) {
    return;
  }

  const isLastStop = currentTourIndex >= tourOrder.length - 1;

  if (isLastStop) {
    finishTour();
    return;
  }

  tourStopReady = false;

  /*
   * Close the current section first.
   */
  if (activeSection) {
    activeSection.classList.remove("is-active");

    const sectionToRemove = activeSection;
    activeSection = null;

    setTimeout(() => {
      sectionToRemove.remove();

      currentTourIndex++;
      showTourStop();
    }, 450);

    return;
  }

  currentTourIndex++;
  showTourStop();
}

/* =====================================================
   STOP TOUR
===================================================== */

function stopTour(returnToCampus = true) {
  clearNavigationTimeout();

  tourActive = false;
  currentTourIndex = 0;
  tourStopReady = false;

  /*
   * If the tour was stopped before completion,
   * allow the visitor to start it again.
   */
  tourCompleted = false;
  updateTourStatus("not-started");

  window.dispatchEvent(
    new CustomEvent("portfolio:erica-tour", {
      detail: {
        action: "stop",
      },
    }),
  );

  if (tourHUD) {
    tourHUD.remove();
    tourHUD = null;
  }

  if (activeSection) {
    activeSection.classList.remove("is-active");

    const sectionToRemove = activeSection;
    activeSection = null;

    setTimeout(() => {
      sectionToRemove.remove();

      if (returnToCampus) {
        updateDirectoryHighlight(null);
        campusMap.centerCampus();
      }
    }, 450);

    return;
  }

  if (returnToCampus) {
    updateDirectoryHighlight(null);
    campusMap.centerCampus();
  }
}

/* =====================================================
   FINISH TOUR
===================================================== */

function finishTour() {
  clearNavigationTimeout();

  tourStopReady = false;

  /*
   * Keep the tour active while Erica walks back
   * to Student Campus and delivers her final message.
   */
  tourActive = true;

  if (activeSection) {
    activeSection.classList.remove("is-active");

    const sectionToRemove = activeSection;
    activeSection = null;

    setTimeout(() => {
      sectionToRemove.remove();

      window.dispatchEvent(
        new CustomEvent("portfolio:erica-tour", {
          detail: {
            action: "complete",
          },
        }),
      );
    }, 450);

    return;
  }

  window.dispatchEvent(
    new CustomEvent("portfolio:erica-tour", {
      detail: {
        action: "complete",
      },
    }),
  );
}

/* =====================================================
   ERICA TOUR FINISHED
===================================================== */

window.addEventListener("portfolio:erica-tour-finished", () => {
  clearNavigationTimeout();

  navigationTimeout = setTimeout(() => {
    window.dispatchEvent(
      new CustomEvent("portfolio:erica-tour", {
        detail: {
          action: "hide-message",
        },
      }),
    );

    tourActive = false;
    tourCompleted = true;
    currentTourIndex = 0;
    tourStopReady = false;

    updateDirectoryHighlight(null);
    updateTourStatus("completed");

    if (tourHUD) {
      tourHUD.remove();
      tourHUD = null;
    }

    navigationTimeout = null;
  }, 5000);
});

/* =====================================================
   SECTION NAVIGATION EVENT
===================================================== */

window.addEventListener("portfolio:navigate", handleSectionNavigation);

/* =====================================================
   ERICA ARRIVAL EVENT
===================================================== */

window.addEventListener("portfolio:erica-arrived", (event) => {
  if (!tourActive) {
    return;
  }

  const locationId = event.detail?.locationId;

  if (!locationId) {
    return;
  }

  const location = findCampusLocation(locationId);

  if (!location) {
    return;
  }

  clearNavigationTimeout();

  navigationTimeout = setTimeout(() => {
    if (!tourActive) {
      return;
    }

    openTourSection(location);
    navigationTimeout = null;
  }, 3500);
});

/* =====================================================
   CREATE CAMPUS
===================================================== */

campusMap = CampusMap(campusContainer, navigateTo, startTour);

/* =====================================================
   RETURN TO CAMPUS
===================================================== */

function returnToCampus() {
  clearNavigationTimeout();

  updateDirectoryHighlight(null);

  if (tourActive) {
    stopTour(true);
    return;
  }

  if (activeSection) {
    closeSection();
    return;
  }

  campusMap.centerCampus();
}

/* =====================================================
   CREATE NAVIGATION
===================================================== */

navigation = Navigation(navigateTo, startTour, returnToCampus);

document.body.appendChild(navigation);

updateTourStatus("not-started");