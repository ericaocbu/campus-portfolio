import { campus } from "../data/campus.js";
import { Building } from "./Building.js";
import { CampusLife } from "./CampusLife.js";

export function CampusMap(
  container,
  onSelect,
  onStartTour
) {
  /* =====================================================
     VIEWPORT
  ===================================================== */

  const viewport =
    document.createElement("div");

  viewport.classList.add(
    "campus-viewport"
  );


  /* =====================================================
     MAP
  ===================================================== */

  const map =
    document.createElement("div");

  map.classList.add(
    "campus-map"
  );


  /* =====================================================
     ENVIRONMENT
  ===================================================== */

  const environment =
    document.createElement("div");

  environment.classList.add(
    "campus-environment"
  );


  /* =====================================================
     WORLD LAYERS
  ===================================================== */

  const paths =
    document.createElement("div");

  paths.classList.add(
    "campus-paths"
  );

  const trees =
    document.createElement("div");

  trees.classList.add(
    "campus-trees"
  );

  const greenery =
    document.createElement("div");

  greenery.classList.add(
    "campus-greenery"
  );

  const details =
    document.createElement("div");

  details.classList.add(
    "campus-details"
  );

  const water =
    document.createElement("div");

  water.classList.add(
    "campus-water"
  );


  /* =====================================================
     CAMPUS LIFE

     CampusLife contains:
     - road
     - bus
     - bus stop
     - bell tower
     - people
     - cat
     - discovery UI

     We will distribute these into the correct
     visual layers below.
  ===================================================== */

  const life =
    CampusLife();

  /* =====================================================
     PATHS
  ===================================================== */

  const pathDefinitions = [
    {
      className: "path-library",
    },

    {
      className: "path-lab",
    },

    {
      className: "path-hall",
    },

    {
      className: "path-canteen",
    },

    {
      className: "path-utown",
    },
  ];

  pathDefinitions.forEach(
    (pathDefinition) => {

      const path =
        document.createElement("div");

      path.classList.add(
        "campus-path",
        pathDefinition.className
      );

      path.innerHTML = `
        <span class="path-line"></span>
      `;

      paths.appendChild(
        path
      );

    }
  );

  /* =====================================================
     TREES
  ===================================================== */

  const treePositions = [
    { left: "7%", top: "15%" },
    { left: "19%", top: "20%" },
    { left: "33%", top: "12%" },
    { left: "68%", top: "13%" },
    { left: "82%", top: "20%" },
    { left: "93%", top: "14%" },

    { left: "5%", top: "48%" },
    { left: "24%", top: "63%" },
    { left: "38%", top: "76%" },
    { left: "63%", top: "77%" },
    { left: "78%", top: "63%" },
    { left: "94%", top: "50%" },

    { left: "8%", top: "82%" },
    { left: "28%", top: "91%" },
    { left: "71%", top: "91%" },
    { left: "91%", top: "81%" },
  ];

  treePositions.forEach(
    (position, index) => {

      const tree =
        document.createElement("span");

      tree.classList.add(
        "campus-tree"
      );

      if (index % 3 === 0) {

        tree.classList.add(
          "campus-tree-large"
        );

      }

      tree.style.left =
        position.left;

      tree.style.top =
        position.top;

      tree.innerHTML = `
        <span class="tree-crown"></span>
        <span class="tree-trunk"></span>
      `;

      trees.appendChild(
        tree
      );

    }
  );


  /* =====================================================
     BUSHES
  ===================================================== */

  const bushPositions = [
    { left: "11%", top: "35%" },
    { left: "29%", top: "35%" },
    { left: "71%", top: "35%" },
    { left: "87%", top: "35%" },

    { left: "18%", top: "73%" },
    { left: "33%", top: "84%" },
    { left: "67%", top: "84%" },
    { left: "82%", top: "73%" },
  ];

  bushPositions.forEach(
    (position) => {

      const bush =
        document.createElement("span");

      bush.classList.add(
        "campus-bush"
      );

      bush.style.left =
        position.left;

      bush.style.top =
        position.top;

      greenery.appendChild(
        bush
      );

    }
  );


  /* =====================================================
     BENCHES
  ===================================================== */

  const benchPositions = [
    {
      left: "35%",
      top: "57%",
      rotation: "-4deg",
    },

    {
      left: "65%",
      top: "57%",
      rotation: "4deg",
    },

    {
      left: "42%",
      top: "82%",
      rotation: "-2deg",
    },

    {
      left: "58%",
      top: "82%",
      rotation: "2deg",
    },
  ];

  benchPositions.forEach(
    (position) => {

      const bench =
        document.createElement("span");

      bench.classList.add(
        "campus-bench"
      );

      bench.style.left =
        position.left;

      bench.style.top =
        position.top;

      bench.style.setProperty(
        "--bench-rotation",
        position.rotation
      );

      bench.innerHTML = `
        <span class="bench-seat"></span>
        <span class="bench-leg bench-leg-left"></span>
        <span class="bench-leg bench-leg-right"></span>
      `;

      details.appendChild(
        bench
      );

    }
  );


  /* =====================================================
     CAMPUS LAMPS
  ===================================================== */

  const lampPositions = [
    { left: "29%", top: "55%" },
    { left: "39%", top: "55%" },
    { left: "61%", top: "55%" },
    { left: "71%", top: "55%" },

    { left: "29%", top: "69%" },
    { left: "71%", top: "69%" },
  ];

  lampPositions.forEach(
    (position) => {

      const lamp =
        document.createElement("span");

      lamp.classList.add(
        "campus-lamp"
      );

      lamp.style.left =
        position.left;

      lamp.style.top =
        position.top;

      lamp.innerHTML = `
        <span class="lamp-light"></span>
        <span class="lamp-pole"></span>
      `;

      details.appendChild(
        lamp
      );

    }
  );


  /* =====================================================
     LANDSCAPED AREAS
  ===================================================== */

  const landscapePositions = [
    {
      left: "16%",
      top: "27%",
      width: "150px",
      height: "55px",
      rotation: "-3deg",
    },

    {
      left: "76%",
      top: "27%",
      width: "150px",
      height: "55px",
      rotation: "3deg",
    },

    {
      left: "38%",
      top: "89%",
      width: "170px",
      height: "50px",
      rotation: "-2deg",
    },

    {
      left: "53%",
      top: "89%",
      width: "170px",
      height: "50px",
      rotation: "2deg",
    },
  ];

  landscapePositions.forEach(
    (position) => {

      const landscape =
        document.createElement("span");

      landscape.classList.add(
        "campus-landscape"
      );

      landscape.style.left =
        position.left;

      landscape.style.top =
        position.top;

      landscape.style.width =
        position.width;

      landscape.style.height =
        position.height;

      landscape.style.setProperty(
        "--landscape-rotation",
        position.rotation
      );

      greenery.appendChild(
        landscape
      );

    }
  );


  /* =====================================================
   CAMPUS SIGN
  ===================================================== */

    details.innerHTML += `
      <div class="campus-sign">

        <span class="sign-post sign-post-left"></span>
        <span class="sign-post sign-post-right"></span>

        <span class="sign-board">

          ERICA'S

          <strong>
            DIGITAL CAMPUS
          </strong>

        </span>

      </div>
    `;


  /* =====================================================
     BUILDINGS
  ===================================================== */

  const buildings =
    document.createElement("div");

  buildings.classList.add(
    "campus-buildings"
  );

  campus.locations.forEach(
    (location) => {

      const building =
        Building(
          location,
          () => onSelect(location)
        );

      buildings.appendChild(
        building
      );

    }
  );


  /* =====================================================
     EXTRACT CAMPUS LIFE ELEMENTS
  ===================================================== */

  const road =
    life.querySelector(
      ".campus-road"
    );

  const bus =
    life.querySelector(
      ".campus-bus"
    );

  const busStop =
    life.querySelector(
      ".campus-bus-stop"
    );


  /*
   * Road belongs to the environment layer.
   */

  if (road) {
    environment.appendChild(
      road
    );
  }


  /*
   * Bus and bus stop stay with the road,
   * but are above the road surface.
   */

  if (bus) {
    environment.appendChild(
      bus
    );
  }

  if (busStop) {
    environment.appendChild(
      busStop
    );
  }


  /* =====================================================
     ASSEMBLE ENVIRONMENT
  ===================================================== */

  environment.appendChild(
    water
  );

  environment.appendChild(
    paths
  );

  environment.appendChild(
    trees
  );

  environment.appendChild(
    greenery
  );

  environment.appendChild(
    details
  );


  /* =====================================================
     ASSEMBLE MAP
  ===================================================== */

  map.appendChild(
    environment
  );

  map.appendChild(
    buildings
  );

  /*
   * CampusLife now contains only the
   * foreground interactive elements:
   *
   * - bell tower
   * - people
   * - cat
   */

  map.appendChild(
    life
  );


  viewport.appendChild(
    map
  );


  /* =====================================================
     START CAMPUS TOUR
  ===================================================== */

  const tourButton =
    document.createElement("button");

  tourButton.type = "button";

  tourButton.classList.add(
    "map-start-tour"
  );

  tourButton.innerHTML = `
    <span class="map-start-tour-icon">
      ✦
    </span>

    <span class="map-start-tour-text">

      <strong>
        START CAMPUS TOUR
      </strong>

      <small>
        Follow the guided journey
      </small>

    </span>

    <span class="map-start-tour-arrow">
      →
    </span>
  `;


  tourButton.addEventListener(
    "click",
    () => {
      onStartTour();
    }
  );


  container.appendChild(
    viewport
  );

  container.appendChild(
    tourButton
  );


  /* =====================================================
     CAMERA
  ===================================================== */

  let previousScrollPosition = {
    x: 0,
    y: 0,
  };


  function moveToLocation(
    location
  ) {

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

      left:
        Math.max(
          0,
          targetX
        ),

      top:
        Math.max(
          0,
          targetY
        ),

      behavior:
        "smooth",

    });

  }


  function returnToPreviousPosition() {

    viewport.scrollTo({

      left:
        previousScrollPosition.x,

      top:
        previousScrollPosition.y,

      behavior:
        "smooth",

    });

  }


  function centerCampus() {

    const x =
      (
        map.offsetWidth -
        viewport.clientWidth
      ) / 2;


    const y =
      (
        map.offsetHeight -
        viewport.clientHeight
      ) / 2;


    viewport.scrollTo({

      left:
        Math.max(
          0,
          x
        ),

      top:
        Math.max(
          0,
          y
        ),

      behavior:
        "instant",

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