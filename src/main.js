import { campus } from "./data/campus.js";

import { CampusMap } from "./components/CampusMap.js";
import { Navigation } from "./components/Navigation.js";
import { SectionView } from "./components/SectionView.js";
import { TourHUD } from "./components/TourHUD.js";

import "./style.css";

const campusContainer =
  document.querySelector("#campus");

let campusMap = null;
let navigation = null;
let activeSection = null;

let navigationTimeout = null;

let tourHUD = null;

let tourActive = false;
let currentTourIndex = 0;

const tourOrder = [
  "main-campus",
  "library",
  "innovation-lab",
  "lecture-hall",
  "food-canteen",
  "utown",
];

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

function navigateTo(location) {
  clearNavigationTimeout();

  if (!location) {
    return;
  }

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

/*
 * Handles navigation requests coming
 * from SectionView.js.
 *
 * SectionView sends:
 *
 * {
 *   locationId: "library"
 * }
 *
 * We use that ID to find the actual
 * campus location and navigate there.
 */
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

function startTour() {
  clearNavigationTimeout();

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

  tourActive = true;
  currentTourIndex = 0;

  showTourStop();
}

function showTourStop() {
  if (!tourActive) {
    return;
  }

  const currentLocation =
    findCampusLocation(
      tourOrder[
        currentTourIndex
      ]
    );

  const nextLocation =
    findCampusLocation(
      tourOrder[
        currentTourIndex + 1
      ]
    );

  if (!currentLocation) {
    finishTour();
    return;
  }

  updateTourHUD(
    currentLocation,
    nextLocation
  );

  campusMap.moveToLocation(
    currentLocation
  );

  clearNavigationTimeout();

  navigationTimeout =
    setTimeout(() => {
      openTourSection(
        currentLocation
      );

      navigationTimeout = null;
    }, 700);
}

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

function handleNextTourStop() {
  if (!tourActive) {
    return;
  }

  const isLastStop =
    currentTourIndex >=
    tourOrder.length - 1;

  if (isLastStop) {
    finishTour();
    return;
  }

  if (activeSection) {
    activeSection.classList.remove(
      "is-active"
    );

    const sectionToRemove =
      activeSection;

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

function stopTour(
  returnToCampus = true
) {
  clearNavigationTimeout();

  tourActive = false;
  currentTourIndex = 0;

  if (tourHUD) {
    tourHUD.remove();
    tourHUD = null;
  }

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

  if (returnToCampus) {
    campusMap.centerCampus();
  }
}

function finishTour() {
  clearNavigationTimeout();

  tourActive = false;
  currentTourIndex = 0;

  if (tourHUD) {
    tourHUD.remove();
    tourHUD = null;
  }

  if (activeSection) {
    activeSection.classList.remove(
      "is-active"
    );

    const sectionToRemove =
      activeSection;

    activeSection = null;

    setTimeout(() => {
      sectionToRemove.remove();

      campusMap.centerCampus();
    }, 450);

    return;
  }

  campusMap.centerCampus();
}

/*
 * Listen for navigation requests
 * from SectionView.
 *
 * This connects the
 * "WHERE SHOULD WE GO?"
 * cards to the actual campus.
 */
window.addEventListener(
  "portfolio:navigate",
  handleSectionNavigation
);

campusMap =
  CampusMap(
    campusContainer,
    navigateTo,
    startTour
  );

navigation =
  Navigation(
    navigateTo,
    startTour
  );

document.body.appendChild(
  navigation
);