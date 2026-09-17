import { campus } from "../data/campus.js";
import { Building } from "./Building.js";

export function CampusMap(container, onSelect) {
  const viewport = document.createElement("div");

  viewport.classList.add("campus-viewport");

  const map = document.createElement("div");

  map.classList.add("campus-map");

  /* =====================================================
     CAMPUS ENVIRONMENT
  ===================================================== */

  const environment = document.createElement("div");

  environment.classList.add("campus-environment");

  const paths = document.createElement("div");

  paths.classList.add("campus-paths");

  const trees = document.createElement("div");

  trees.classList.add("campus-trees");

  const greenery = document.createElement("div");

  greenery.classList.add("campus-greenery");

  const details = document.createElement("div");

  details.classList.add("campus-details");


  /* =====================================================
     PATHS
  ===================================================== */

  const pathDefinitions = [
    {
      className: "path-library",
      text: "ABOUT ME",
    },

    {
      className: "path-lab",
      text: "PROJECTS",
    },

    {
      className: "path-hall",
      text: "EXPERIENCE",
    },

    {
      className: "path-canteen",
      text: "CONTACT",
    },

    {
      className: "path-utown",
      text: "BEYOND",
    },
  ];

  pathDefinitions.forEach((pathDefinition) => {
    const path = document.createElement("div");

    path.classList.add(
      "campus-path",
      pathDefinition.className
    );

    path.innerHTML = `
      <span class="path-line"></span>

      <span class="path-arrow">
        →
      </span>
    `;

    paths.appendChild(path);
  });


  /* =====================================================
     BUILDINGS
  ===================================================== */

  const buildings = document.createElement("div");

  buildings.classList.add("campus-buildings");

  campus.locations.forEach((location) => {
    const building = Building(
      location,
      () => onSelect(location)
    );

    buildings.appendChild(building);
  });


  /* =====================================================
     ASSEMBLE CAMPUS
  ===================================================== */

  environment.appendChild(paths);
  environment.appendChild(trees);
  environment.appendChild(greenery);
  environment.appendChild(details);

  map.appendChild(environment);
  map.appendChild(buildings);

  viewport.appendChild(map);

  container.appendChild(viewport);


  /* =====================================================
     CAMERA
  ===================================================== */

  let previousScrollPosition = {
    x: 0,
    y: 0,
  };


  function moveToLocation(location) {
    previousScrollPosition = {
      x: viewport.scrollLeft,
      y: viewport.scrollTop,
    };

    const targetX =
      location.camera.x -
      viewport.clientWidth / 2;

    const targetY =
      location.camera.y -
      viewport.clientHeight / 2;

    viewport.scrollTo({
      left: Math.max(0, targetX),
      top: Math.max(0, targetY),
      behavior: "smooth",
    });
  }


  function returnToPreviousPosition() {
    viewport.scrollTo({
      left: previousScrollPosition.x,
      top: previousScrollPosition.y,
      behavior: "smooth",
    });
  }


  function centerCampus() {
    const x =
      (map.offsetWidth - viewport.clientWidth) / 2;

    const y =
      (map.offsetHeight - viewport.clientHeight) / 2;

    viewport.scrollTo({
      left: Math.max(0, x),
      top: Math.max(0, y),
      behavior: "instant",
    });
  }


  requestAnimationFrame(() => {
    centerCampus();
  });


  return {
    viewport,
    moveToLocation,
    returnToPreviousPosition,
    centerCampus,
  };
}