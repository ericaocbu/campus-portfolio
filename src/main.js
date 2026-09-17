import { campus } from "./data/campus.js";

import { CampusMap } from "./components/CampusMap.js";
import { Navigation } from "./components/Navigation.js";
import { SectionView } from "./components/SectionView.js";
import { TourControls } from "./components/TourControls.js";

import "./style.css";


/* =====================================================
   CAMPUS
===================================================== */

const campusContainer =
  document.querySelector("#campus");

let activeSection = null;

let campusMap = null;

let navigationTimeout = null;

let tourControls = null;

let tourActive = false;

let currentTourIndex = 0;


/* =====================================================
   TOUR ORDER
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
   FIND LOCATION
===================================================== */

function findCampusLocation(id) {
  return campus.locations.find(
    (location) =>
      location.id === id
  );
}


/* =====================================================
   NAVIGATE
===================================================== */

function navigateTo(location) {
  if (navigationTimeout) {
    clearTimeout(navigationTimeout);
  }

  campusMap.moveToLocation(location);

  navigationTimeout = setTimeout(() => {
    openSection(location);

    navigationTimeout = null;
  }, 650);
}


/* =====================================================
   OPEN SECTION
===================================================== */

function openSection(location) {
  if (activeSection) {
    activeSection.remove();
  }

  activeSection = SectionView(
    location,
    closeSection
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
   CLOSE SECTION
===================================================== */

function closeSection() {
  if (!activeSection) {
    return;
  }

  activeSection.classList.remove(
    "is-active"
  );

  setTimeout(() => {
    if (!activeSection) {
      return;
    }

    activeSection.remove();

    activeSection = null;

    campusMap.returnToPreviousPosition();

    if (tourActive) {
      currentTourIndex++;

      showNextTourStop();
    }
  }, 450);
}


/* =====================================================
   START TOUR
===================================================== */

function startTour() {
  tourActive = true;

  currentTourIndex = 0;

  showNextTourStop();
}


/* =====================================================
   SHOW CURRENT TOUR STOP
===================================================== */

function showNextTourStop() {
  if (
    currentTourIndex >=
    tourOrder.length
  ) {
    finishTour();

    return;
  }

  const location =
    findCampusLocation(
      tourOrder[currentTourIndex]
    );

  if (!location) {
    return;
  }

  createTourControls(location);

  campusMap.moveToLocation(location);
}


/* =====================================================
   CREATE TOUR CONTROLS
===================================================== */

function createTourControls(
  location
) {
  if (tourControls) {
    tourControls.remove();
  }

  tourControls = TourControls({
    currentIndex:
      currentTourIndex,

    totalStops:
      tourOrder.length,

    currentLocation:
      location,

    onNext:
      continueTour,

    onStop:
      stopTour,
  });

  document.body.appendChild(
    tourControls
  );
}


/* =====================================================
   CONTINUE
===================================================== */

function continueTour() {
  const location =
    findCampusLocation(
      tourOrder[currentTourIndex]
    );

  if (!location) {
    return;
  }

  navigateTo(location);
}


/* =====================================================
   STOP
===================================================== */

function stopTour() {
  tourActive = false;

  currentTourIndex = 0;

  if (tourControls) {
    tourControls.remove();

    tourControls = null;
  }
}


/* =====================================================
   FINISH
===================================================== */

function finishTour() {
  tourActive = false;

  currentTourIndex = 0;

  if (tourControls) {
    tourControls.remove();

    tourControls = null;
  }
}


/* =====================================================
   INITIALIZE
===================================================== */

campusMap = CampusMap(
  campusContainer,
  navigateTo
);

const navigation =
  Navigation(
    navigateTo,
    startTour
  );

document.body.appendChild(
  navigation
);