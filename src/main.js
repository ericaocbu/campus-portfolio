import { campus } from "./data/campus.js";

import { CampusMap } from "./components/CampusMap.js";
import { Navigation } from "./components/Navigation.js";
import { SectionView } from "./components/SectionView.js";
import { TourHUD } from "./components/TourHUD.js";

import "./style.css";


/* =====================================================
   APP SETUP
===================================================== */

const campusContainer =
  document.querySelector("#campus");

let campusMap = null;
let navigation = null;
let activeSection = null;

let navigationTimeout = null;
let tourHUD = null;

let tourActive = false;
let currentTourIndex = 0;


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
  return campus.locations.find(
    (location) =>
      location.id === id
  );
}

function clearNavigationTimeout() {
  if (navigationTimeout) {
    clearTimeout(
      navigationTimeout
    );

    navigationTimeout = null;
  }
}


/* =====================================================
   NORMAL CAMPUS NAVIGATION
===================================================== */

function navigateTo(location) {
  clearNavigationTimeout();

  if (!location) {
    return;
  }

  /*
   * If the visitor navigates somewhere while
   * the guided tour is active, stop the tour.
   */
  if (tourActive) {
    stopTour(false);
  }

  campusMap.moveToLocation(
    location
  );

  navigationTimeout =
    setTimeout(() => {

      openSection(location);

      navigationTimeout = null;

    }, 650);
}


/* =====================================================
   SECTION NAVIGATION
===================================================== */

function handleSectionNavigation(
  event
) {
  const locationId =
    event.detail?.locationId;

  if (!locationId) {
    return;
  }

  const location =
    findCampusLocation(
      locationId
    );

  if (!location) {
    console.warn(
      `Campus location "${locationId}" was not found.`
    );

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

  activeSection =
    SectionView(
      location,
      closeSection,
      {
        tourActive: false,
        onStartTour: startTour,
        onNavigate: navigateTo,
      }
    );

  document.body.appendChild(
    activeSection
  );

  requestAnimationFrame(() => {
    activeSection.classList.add(
      "is-active"
    );
  });
}


/* =====================================================
   CLOSE NORMAL SECTION
===================================================== */

function closeSection() {
  if (!activeSection) {
    return;
  }

  activeSection.classList.remove(
    "is-active"
  );

  const sectionToRemove =
    activeSection;

  setTimeout(() => {
    sectionToRemove.remove();

    if (
      activeSection ===
      sectionToRemove
    ) {
      activeSection = null;
    }

    if (!tourActive) {
      campusMap.returnToPreviousPosition();
    }
  }, 450);
}


/* =====================================================
   START GUIDED TOUR
===================================================== */

function startTour() {
  clearNavigationTimeout();

  /*
   * Close whatever section is currently open.
   */
  if (activeSection) {
    activeSection.classList.remove(
      "is-active"
    );

    const sectionToRemove =
      activeSection;

    activeSection = null;

    setTimeout(() => {
      sectionToRemove.remove();
    }, 450);
  }

  /*
   * Activate the guided tour.
   */
  tourActive = true;
  currentTourIndex = 0;


  /*
   * Tell Erica that the tour has started.
   *
   * Erica is already waiting at Student Campus,
   * so she does NOT walk there again.
   */
  window.dispatchEvent(
    new CustomEvent(
      "portfolio:erica-tour",
      {
        detail: {
          action: "start",
        },
      }
    )
  );

  /*
   * Show the first tour stop.
   */
  showTourStop();
}

/* =====================================================
   SHOW CURRENT TOUR STOP
===================================================== */

function showTourStop() {
  if (!tourActive) {
    return;
  }

  const currentLocation =
    findCampusLocation(
      tourOrder[currentTourIndex]
    );

  const nextLocation =
    findCampusLocation(
      tourOrder[currentTourIndex + 1]
    );

  /*
   * Make sure the location exists.
   */
  if (!currentLocation) {
    finishTour();
    return;
  }

  /*
   * Update the tour HUD.
   */
  updateTourHUD(
    currentLocation,
    nextLocation
  );

  /*
   * Move the camera to the destination.
   */
  campusMap.moveToLocation(
    currentLocation
  );

  /*
   * Student Campus is where Erica is already waiting.
   * Give her message time to be seen before opening.
   */
  if (currentLocation.id === "main-campus") {

    clearNavigationTimeout();

    navigationTimeout =
      setTimeout(() => {

        if (!tourActive) {
          return;
        }

        openTourSection(
          currentLocation
        );

        navigationTimeout = null;

      }, 1200);

    return;
  }

  /*
   * For every building, Erica walks there.
   *
   * The building will NOT open yet.
   * CampusLife will tell us when Erica arrives
   * and her message has been displayed.
   */
  window.dispatchEvent(
    new CustomEvent(
      "portfolio:erica-tour",
      {
        detail: {
          action: "move",
          locationId:
            currentLocation.id,
        },
      }
    )
  );
}


/* =====================================================
   OPEN TOUR SECTION
===================================================== */

function openTourSection(location) {
  if (activeSection) {
    activeSection.remove();
  }

  activeSection =
    SectionView(
      location,
      closeTourSection,
      {
        tourActive: true,
        onStartTour: startTour,
        onNavigate: navigateTo,
      }
    );

  document.body.appendChild(
    activeSection
  );

  requestAnimationFrame(() => {
    activeSection.classList.add(
      "is-active"
    );
  });
}


/* =====================================================
   CLOSE TOUR SECTION
===================================================== */

function closeTourSection() {
  if (!activeSection) {
    return;
  }

  activeSection.classList.remove(
    "is-active"
  );

  const sectionToRemove =
    activeSection;

  activeSection = null;

  setTimeout(() => {
    sectionToRemove.remove();
  }, 450);
}


/* =====================================================
   TOUR HUD
===================================================== */

function updateTourHUD(
  currentLocation,
  nextLocation
) {
  if (tourHUD) {
    tourHUD.remove();
    tourHUD = null;
  }

  tourHUD =
    TourHUD({
      currentIndex:
        currentTourIndex,

      totalStops:
        tourOrder.length,

      currentLocation,

      nextLocation,

      onNext:
        handleNextTourStop,

      onExit:
        () => stopTour(true),
    });

  document.body.appendChild(
    tourHUD
  );
}


/* =====================================================
   NEXT TOUR STOP
===================================================== */

function handleNextTourStop() {
  if (!tourActive) {
    return;
  }

  const isLastStop =
    currentTourIndex >=
    tourOrder.length - 1;


  /*
   * If we're at UTown, the tour is finished.
   */
  if (isLastStop) {
    finishTour();
    return;
  }


  /*
   * Close the current section first.
   */
  if (activeSection) {
    activeSection.classList.remove(
      "is-active"
    );

    const sectionToRemove =
      activeSection;

    activeSection = null;

    setTimeout(() => {
      sectionToRemove.remove();

      /*
       * Move to the next location.
       */
      currentTourIndex++;

      showTourStop();
    }, 450);

    return;
  }


  /*
   * No section is open, so move immediately.
   */
  currentTourIndex++;

  showTourStop();
}


/* =====================================================
   STOP TOUR
===================================================== */

function stopTour(
  returnToCampus = true
) {
  clearNavigationTimeout();

  tourActive = false;
  currentTourIndex = 0;


  /*
   * Tell Erica to stop guided-tour mode.
   */
  window.dispatchEvent(
    new CustomEvent(
      "portfolio:erica-tour",
      {
        detail: {
          action: "stop",
        },
      }
    )
  );


  /*
   * Remove the tour HUD.
   */
  if (tourHUD) {
    tourHUD.remove();
    tourHUD = null;
  }


  /*
   * Close the active section.
   */
  if (activeSection) {
    activeSection.classList.remove(
      "is-active"
    );

    const sectionToRemove =
      activeSection;

    activeSection = null;

    setTimeout(() => {
      sectionToRemove.remove();

      if (returnToCampus) {
        campusMap.centerCampus();
      }
    }, 450);

    return;
  }


  /*
   * Return to the campus center.
   */
  if (returnToCampus) {
    campusMap.centerCampus();
  }
}


/* =====================================================
   FINISH TOUR
===================================================== */

function finishTour() {
  clearNavigationTimeout();

  /*
   * Keep the tour active while Erica walks back
   * to Student Campus and delivers her final message.
   */
  tourActive = true;

  /*
   * Close the final section first.
   */
  if (activeSection) {
    activeSection.classList.remove(
      "is-active"
    );

    const sectionToRemove =
      activeSection;

    activeSection = null;

    setTimeout(() => {
      sectionToRemove.remove();

      /*
       * Tell Erica to return to Student Campus.
       */
      window.dispatchEvent(
        new CustomEvent(
          "portfolio:erica-tour",
          {
            detail: {
              action: "complete",
            },
          }
        )
      );

    }, 450);

    return;
  }

  /*
   * No section is open, so send Erica back immediately.
   */
  window.dispatchEvent(
    new CustomEvent(
      "portfolio:erica-tour",
      {
        detail: {
          action: "complete",
        },
      }
    )
  );
}

/* =====================================================
   ERICA TOUR FINISHED
===================================================== */

window.addEventListener(
  "portfolio:erica-tour-finished",
  () => {

    clearNavigationTimeout();

    navigationTimeout =
      setTimeout(() => {

        /*
         * Hide Erica's final message.
         */
        window.dispatchEvent(
          new CustomEvent(
            "portfolio:erica-tour",
            {
              detail: {
                action: "hide-message",
              },
            }
          )
        );

        /*
         * Now the guided tour is officially over.
         */
        tourActive = false;
        currentTourIndex = 0;

        if (tourHUD) {
          tourHUD.remove();
          tourHUD = null;
        }

        navigationTimeout = null;

      }, 5500);
  }
);

/* =====================================================
   SECTION NAVIGATION EVENT
===================================================== */

window.addEventListener(
  "portfolio:navigate",
  handleSectionNavigation
);

/* =====================================================
   ERICA ARRIVAL EVENT
===================================================== */

window.addEventListener(
  "portfolio:erica-arrived",
  (event) => {

    if (!tourActive) {
      return;
    }

    const locationId =
      event.detail?.locationId;

    if (!locationId) {
      return;
    }

    const location =
      findCampusLocation(
        locationId
      );

    if (!location) {
      return;
    }

    /*
     * Erica has arrived and her message
     * has already been displayed.
     *
     * Now open the building.
     */
    clearNavigationTimeout();

    navigationTimeout =
      setTimeout(() => {

        if (!tourActive) {
          return;
        }

        openTourSection(
          location
        );

        navigationTimeout = null;

      }, 4500);
  }
);

/* =====================================================
   CREATE CAMPUS
===================================================== */

campusMap =
  CampusMap(
    campusContainer,
    navigateTo,
    startTour
  );

function returnToCampus() {
  clearNavigationTimeout();

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

navigation =
  Navigation(
    navigateTo,
    startTour,
    returnToCampus
  );

document.body.appendChild(
  navigation
);