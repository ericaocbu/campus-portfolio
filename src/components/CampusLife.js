export function CampusLife() {
  const life = document.createElement("div");

  life.classList.add("campus-life");

  life.innerHTML = `
    <!-- =========================================
         CAMPUS SKY
    ========================================== -->

    <div class="campus-sky"></div>


    <!-- =========================================
         CAMPUS ROAD
    ========================================== -->

    <div class="campus-road">

      <span class="road-line road-line-one"></span>
      <span class="road-line road-line-two"></span>

      <span class="road-curb"></span>

    </div>


    <!-- =========================================
         BUS
    ========================================== -->

    <div
      class="campus-bus bus-one"
      aria-hidden="true"
    >

      <div class="bus-roof"></div>

      <div class="bus-body">

        <div class="bus-front-window"></div>

        <div class="bus-window-group">

          <span class="bus-window"></span>
          <span class="bus-window"></span>
          <span class="bus-window"></span>

        </div>

        <span class="bus-door"></span>

        <span class="bus-route">
          01
        </span>

      </div>

      <span class="bus-wheel bus-wheel-left"></span>
      <span class="bus-wheel bus-wheel-right"></span>

    </div>


    <!-- =========================================
         BUS STOP
    ========================================== -->

    <div
      class="campus-bus-stop bus-stop-one"
      aria-label="Campus bus stop"
    >

      <span class="bus-stop-pole"></span>

      <span class="bus-stop-sign">
        BUS
      </span>

      <span class="bus-stop-bench"></span>

    </div>


    <!-- =========================================
         BELL TOWER
    ========================================== -->

    <button
      class="campus-bell-tower"
      type="button"
      aria-label="Explore the bell tower"
      data-discovery="bell-tower"
    >

      <span class="bell-tower-shadow"></span>

      <span class="bell-tower-building">

        <span class="bell-tower-roof"></span>

        <span class="bell-tower-window"></span>

        <span
          class="bell-tower-window bell-tower-window-two"
        ></span>

        <span class="bell-tower-bell">
          ◒
        </span>

        <span class="bell-tower-clock"></span>

      </span>

      <span class="bell-tower-spire"></span>

      <span class="bell-tower-label">
        BELL TOWER
      </span>

    </button>

    <!-- =========================================
     ORIENTATION LEADER ERICA
    ========================================== -->

    <div
      class="campus-erica"
      aria-hidden="true"
    >
      <span class="erica-shadow"></span>

      <span class="erica-hair"></span>

      <span class="erica-head"></span>

      <span class="erica-neck"></span>

      <span class="erica-body"></span>

      <span class="erica-arm erica-arm-left"></span>
      <span class="erica-arm erica-arm-right"></span>

      <span class="erica-leg erica-leg-left"></span>
      <span class="erica-leg erica-leg-right"></span>

      <span class="erica-badge">TOUR</span>
    </div>


    <div
      class="erica-dialogue"
      aria-hidden="true"
    >
      <span class="erica-dialogue-label">
        ORIENTATION LEADER ERICA
      </span>

      <strong class="erica-dialogue-text">
        Come on, you're late for the tour!
      </strong>
    </div>
    
    <!-- =========================================
         CAMPUS PEOPLE
    ========================================== -->


    <!-- PERSON ONE -->

    <div
      class="campus-person campus-person-walker person-one"
      aria-hidden="true"
    >

      <span class="person-shadow"></span>

      <span class="person-hair person-hair-dark"></span>

      <span class="person-head"></span>

      <span class="person-neck"></span>

      <span class="person-body person-shirt-green"></span>

      <span class="person-arm person-arm-left"></span>
      <span class="person-arm person-arm-right"></span>

      <span class="person-leg person-leg-left"></span>
      <span class="person-leg person-leg-right"></span>

    </div>


    <!-- PERSON TWO -->

    <div
      class="campus-person campus-person-walker person-two"
      aria-hidden="true"
    >

      <span class="person-shadow"></span>

      <span class="person-hair person-hair-brown"></span>

      <span class="person-head"></span>

      <span class="person-neck"></span>

      <span class="person-body person-shirt-cream"></span>

      <span class="person-arm person-arm-left"></span>
      <span class="person-arm person-arm-right"></span>

      <span class="person-leg person-leg-left"></span>
      <span class="person-leg person-leg-right"></span>

    </div>


    <!-- PERSON THREE -->

    <div
      class="campus-person campus-person-runner person-three"
      aria-hidden="true"
    >

      <span class="person-shadow"></span>

      <span class="person-hair person-hair-dark"></span>

      <span class="person-head"></span>

      <span class="person-neck"></span>

      <span class="person-body person-shirt-rust"></span>

      <span class="person-arm person-arm-left"></span>
      <span class="person-arm person-arm-right"></span>

      <span class="person-leg person-leg-left"></span>
      <span class="person-leg person-leg-right"></span>

    </div>

    <!-- Two students talking -->

    <div class="campus-conversation" aria-label="Two students talking">

    <div class="conversation-student conversation-student-one">
        <span class="conversation-shadow"></span>
        <span class="conversation-hair conversation-hair-one"></span>
        <span class="conversation-head"></span>
        <span class="conversation-neck"></span>
        <span class="conversation-body conversation-shirt-one"></span>
        <span class="conversation-arm conversation-arm-left"></span>
        <span class="conversation-arm conversation-arm-right"></span>
        <span class="conversation-leg conversation-leg-left"></span>
        <span class="conversation-leg conversation-leg-right"></span>
    </div>

    <div class="conversation-student conversation-student-two">
        <span class="conversation-shadow"></span>
        <span class="conversation-hair conversation-hair-two"></span>
        <span class="conversation-head"></span>
        <span class="conversation-neck"></span>
        <span class="conversation-body conversation-shirt-two"></span>
        <span class="conversation-arm conversation-arm-left"></span>
        <span class="conversation-arm conversation-arm-right"></span>
        <span class="conversation-leg conversation-leg-left"></span>
        <span class="conversation-leg conversation-leg-right"></span>
    </div>

    </div>

    <div class="campus-person person-girl-one">
      <span class="person-shadow"></span>
      <span class="person-hair person-hair-long"></span>
      <span class="person-head"></span>
      <span class="person-neck"></span>
      <span class="person-body"></span>
      <span class="person-arm person-arm-left"></span>
      <span class="person-arm person-arm-right"></span>
      <span class="person-leg person-leg-left"></span>
      <span class="person-leg person-leg-right"></span>
    </div>

    <div class="campus-person person-girl-two">
      <span class="person-shadow"></span>
      <span class="person-hair person-hair-long"></span>
      <span class="person-head"></span>
      <span class="person-neck"></span>
      <span class="person-body"></span>
      <span class="person-arm person-arm-left"></span>
      <span class="person-arm person-arm-right"></span>
      <span class="person-leg person-leg-left"></span>
      <span class="person-leg person-leg-right"></span>
    </div>


    <!-- =========================================
         HIDDEN CAMPUS CAT
    ========================================== -->

    <button
      class="campus-cat"
      type="button"
      aria-label="A campus cat"
      data-discovery="campus-cat"
    >

      <span class="cat-tail"></span>

      <span class="cat-body"></span>

      <span class="cat-head">

        <span class="cat-ear cat-ear-left"></span>
        <span class="cat-ear cat-ear-right"></span>

        <span class="cat-eye cat-eye-left"></span>
        <span class="cat-eye cat-eye-right"></span>

      </span>

    </button>


    <!-- =========================================
         RECYCLING BINS
    ========================================== -->

    <button
      class="campus-recycling"
      type="button"
      data-discovery="recycling"
      aria-label="Recycling bins"
    >

      <span class="recycling-bin recycling-trash"></span>

      <span class="recycling-bin recycling-recycle">
        ♻
      </span>

    </button>


    <!-- =========================================
         BIKE RACK
    ========================================== -->

    <button
      class="campus-bike-rack"
      type="button"
      data-discovery="bike-rack"
      aria-label="Bike rack"
    >

      <span class="bike-rack-bar"></span>

      <span class="campus-bike bike-one">

        <span class="bike-wheel bike-wheel-front"></span>
        <span class="bike-wheel bike-wheel-back"></span>

        <span class="bike-frame"></span>

        <span class="bike-seat"></span>

        <span class="bike-handlebars"></span>

      </span>


      <span class="campus-bike bike-two">

        <span class="bike-wheel bike-wheel-front"></span>
        <span class="bike-wheel bike-wheel-back"></span>

        <span class="bike-frame"></span>

        <span class="bike-seat"></span>

        <span class="bike-handlebars"></span>

      </span>

      <span class="discovery-label">
        Bike Rack
      </span>

    </button>


    <!-- =========================================
         FLOWER BED
    ========================================== -->

    <button
      class="campus-flower-bed"
      type="button"
      data-discovery="flowers"
      aria-label="Flower bed"
    >

      <span class="flower-bed-soil"></span>


      <span class="campus-flower flower-one">

        <span class="flower-stem"></span>
        <span class="flower-head">✿</span>

      </span>


      <span class="campus-flower flower-two">

        <span class="flower-stem"></span>
        <span class="flower-head">✿</span>

      </span>


      <span class="campus-flower flower-three">

        <span class="flower-stem"></span>
        <span class="flower-head">✿</span>

      </span>


      <span class="campus-flower flower-four">

        <span class="flower-stem"></span>
        <span class="flower-head">✿</span>

      </span>

      <span class="discovery-label">
        Flower Bed
      </span>

    </button>


    <!-- =========================================
         FOUNTAIN
    ========================================== -->

    <button
      class="campus-fountain"
      type="button"
      data-discovery="fountain"
      aria-label="Campus fountain"
    >

      <span class="fountain-basin"></span>

      <span class="fountain-water"></span>

      <span class="fountain-pillar"></span>

      <span class="fountain-ripple ripple-one"></span>
      <span class="fountain-ripple ripple-two"></span>
      <span class="fountain-ripple ripple-three"></span>

      <span class="discovery-label">
        Fountain
      </span>
    </button>


    <!-- =========================================
         DISCOVERY HUD
    ========================================== -->

    <button
      class="campus-discovery-hud"
      type="button"
      aria-label="Campus discoveries"
    >

      <span class="discovery-star">
        ✦
      </span>

      <span class="discovery-copy">

        <small>
          CAMPUS DISCOVERIES
        </small>

        <strong>

          <span class="discovery-count">
            0
          </span>

          / 6

        </strong>

      </span>

    </button>


    <!-- =========================================
         DISCOVERY MESSAGE
    ========================================== -->

    <div
      class="campus-discovery-message"
      aria-live="polite"
    >

      <span class="discovery-message-number">
      </span>

      <strong class="discovery-message-title">
        CAMPUS SECRET
      </strong>

      <p class="discovery-message-text">
        You found something hidden.
      </p>

    </div>
  `;


  /* =====================================================
     DISCOVERY SYSTEM
  ===================================================== */

  const discoveries = new Set();

  const discoveryData = {

    "bell-tower": {
      title: "THE BELL TOWER",
      text:
        "You found the loudest thing on campus... .·°՞(˃ ᗝ ˂)՞°·.",
    },

    "campus-cat": {
      title: "THE CAMPUS CAT",
      text:
        "It doesn't work here...it simply lives here (˶ᵔ ᵕ ᵔ˶)",
    },

    recycling: {
      title: "RECYCLING",
      text:
        "Please keep the campus clean (''-ࡇ-)",
    },

    "bike-rack": {
      title: "BIKE RACK",
      text:
        "A parking lot for bikes (•̀⤙•́ )",
    },

    flowers: {
      title: "CAMPUS GARDEN",
      text:
        "Watered daily by student tears (╥﹏╥)",
    },

    fountain: {
      title: "CAMPUS FOUNTAIN",
      text:
        "This feels like a good place to sit and figure things out (⸝⸝ᵕᴗᵕ⸝⸝)",
    },

  };


  /* =====================================================
     DISCOVERY ELEMENTS
  ===================================================== */

  const discoveryCount =
    life.querySelector(
      ".discovery-count"
    );

  const discoveryTitle =
    life.querySelector(
      ".discovery-message-title"
    );

  const discoveryText =
    life.querySelector(
      ".discovery-message-text"
    );

  const discoveryHud =
    life.querySelector(
      ".campus-discovery-hud"
    );

  const discoveryMessage =
    life.querySelector(
      ".campus-discovery-message"
    );


  let messageTimeout = null;


  /* =====================================================
     DISCOVER
  ===================================================== */

  function discover(id, object) {
  const discovery = discoveryData[id];

  if (!discovery) return;

  // If already found, replay the animation but don't show FOUND again.
  if (discoveries.has(id)) {
    playDiscoveryAnimation(object);
    return;
  }

  discoveries.add(id);

// Update discovery HUD
  discoveryCount.textContent = `${discoveries.size}`;


    /* Update discovery message */

    discoveryTitle.textContent =
    `FOUND! ${discovery.title}`;

    discoveryText.textContent =
      discovery.text;


    /* Play object animation */

    playDiscoveryAnimation(object);


    /* Show message */

    discoveryMessage.classList.add(
      "is-visible"
    );


    /* Reset message timer */

    window.clearTimeout(
      messageTimeout
    );


    messageTimeout =
      window.setTimeout(() => {

        discoveryMessage.classList.remove(
          "is-visible"
        );

      }, 4200);

  }


  /* =====================================================
     DISCOVERY ANIMATION
  ===================================================== */

  function playDiscoveryAnimation(object) {

    if (!object) {
      return;
    }


    /*
     * Remove the class first so the animation
     * can be replayed if the user clicks again.
     */

    object.classList.remove(
      "is-discovered"
    );


    /*
     * Force the browser to recognize the removal
     * before adding the class again.
     */

    void object.offsetWidth;


    object.classList.add(
      "is-discovered"
    );


    /*
     * Remove the temporary animation class
     * after the longest discovery animation.
     */

    window.setTimeout(() => {

      object.classList.remove(
        "is-discovered"
      );

    }, 1000);

  }


  /* =====================================================
     DISCOVERY CLICK HANDLERS
  ===================================================== */

  const discoveryObjects =
    life.querySelectorAll(
      "[data-discovery]"
    );


  discoveryObjects.forEach(
    (object) => {

      object.addEventListener(
        "click",
        () => {

          discover(
            object.dataset.discovery,
            object
          );

        }
      );

    }
  );


  /* =====================================================
     CAT INTERACTION
  ===================================================== */

  const cat =
    life.querySelector(
      ".campus-cat"
    );


  if (cat) {

    cat.addEventListener(
      "click",
      () => {

        cat.classList.remove(
          "is-interested"
        );

        void cat.offsetWidth;

        cat.classList.add(
          "is-interested"
        );

        window.setTimeout(() => {

          cat.classList.remove(
            "is-interested"
          );

        }, 900);

      }
    );

  }


  /* =====================================================
     BELL TOWER INTERACTION
  ===================================================== */

  const bellTower =
    life.querySelector(
      ".campus-bell-tower"
    );


  if (bellTower) {

    bellTower.addEventListener(
      "click",
      () => {

        bellTower.classList.remove(
          "is-ringing"
        );

        void bellTower.offsetWidth;

        bellTower.classList.add(
          "is-ringing"
        );

        window.setTimeout(() => {

          bellTower.classList.remove(
            "is-ringing"
          );

        }, 900);

      }
    );

  }


  /* =====================================================
     DISCOVERY HUD
  ===================================================== */

  if (discoveryHud) {

    discoveryHud.addEventListener(
      "click",
      () => {

        const complete =
          discoveries.size === 6;


        discoveryTitle.textContent =
          complete
            ? "CAMPUS COMPLETE"
            : "KEEP EXPLORING";


        discoveryText.textContent =
          complete
            ? "You found every hidden detail ٩(>ᴗ<)و"
            : "There are still a few things hiding around campus (•̀ᴗ•́ )ゞ ";


        discoveryMessage.classList.toggle(
          "is-visible"
        );


        /*
         * Prevent an old timeout from
         * immediately closing the message.
         */

        window.clearTimeout(
          messageTimeout
        );


        if (
          discoveryMessage.classList.contains(
            "is-visible"
          )
        ) {

          messageTimeout =
            window.setTimeout(() => {

              discoveryMessage.classList.remove(
                "is-visible"
              );

            }, 4200);

        }

      }
    );

  }
/* =====================================================
   ORIENTATION LEADER ERICA
===================================================== */

const erica = life.querySelector(".campus-erica");
const ericaDialogue = life.querySelector(".erica-dialogue");
const ericaDialogueText = life.querySelector(".erica-dialogue-text");

let ericaTourActive = false;
/* =====================================================
   ERICA TOUR STOPS
===================================================== */

/*
 * Erica's final position at each tour stop.
 *
 * These positions keep her near the buildings
 * without placing her directly inside them.
 */
const ericaTourStops = {
  "main-campus": {
    left: "50%",
    top: "72%",
    message: "Come on, you're late for the tour!",
  },

  library: {
    left: "50%",
    top: "39%",
    message:
      "First stop — the Library. Come on, I've got a lot to show you.",
  },

  "innovation-lab": {
    left: "28%",
    top: "58%",
    message:
      "Okay, enough about me. Let's see what I've been making at the Lab.",
  },

  "lecture-hall": {
    left: "72%",
    top: "58%",
    message:
      "Ready to see where I've put all those skills to work? This way to the Lecture Hall!",
  },

  "food-canteen": {
    left: "19%",
    top: "69%",
    message:
      "Here's the Canteen — and, conveniently, this is also where you can find me. Grab a seat!",
  },

  utown: {
    left: "81%",
    top: "69%",
    message:
      "Welcome to the Dorms, this is where I relax and have fun!",
  },

  "tour-complete": {
  left: "50%",
  top: "72%",
  message:
    "And that's the tour! But you don't have to leave yet. Explore — there might be a few campus discoveries you haven't found yet.",
},
};


/* =====================================================
   ERICA WALKING ROUTES
===================================================== */
const ericaRoutes = {
  /* =====================================================
     MAIN CAMPUS → LIBRARY
     Go around the RIGHT side of Main Campus.
  ===================================================== */

  library: [
    { left: "61%", top: "72%" },
    { left: "61%", top: "39%" },
    { left: "50%", top: "39%" },
    { left: "50%", top: "35%" },
  ],


  /* =====================================================
     LIBRARY → INNOVATION LAB
     Cross above Main Campus, then go around its LEFT side.
  ===================================================== */

  "innovation-lab": [
    { left: "36%", top: "39%" },
    { left: "36%", top: "50%" },
    { left: "28%", top: "50%" },
    { left: "28%", top: "58%" },
  ],


  /* =====================================================
     INNOVATION LAB → LECTURE HALL
     Follow the open horizontal route around Main Campus.
  ===================================================== */

  "lecture-hall": [
    { left: "28%", top: "58%" },
    { left: "28%", top: "69%" },
    { left: "50%", top: "69%" },
    { left: "72%", top: "69%" },
    { left: "72%", top: "58%" },
  ],


  /* =====================================================
     LECTURE HALL → FOOD CANTEEN
     Head down the right side, across the lower campus,
     then up the left side.
  ===================================================== */

  "food-canteen": [
    { left: "72%", top: "78%" },
    { left: "50%", top: "78%" },
    { left: "36%", top: "78%" },
    { left: "25%", top: "69%" },
  ],


  /* =====================================================
     FOOD CANTEEN → UTOWN
     Follow the lower campus route all the way across.
  ===================================================== */

  utown: [
    { left: "25%", top: "69%" },
    { left: "50%", top: "69%" },
    { left: "70%", top: "69%" },
    { left: "81%", top: "69%" },
  ],


  /* =====================================================
     UTOWN → MAIN CAMPUS
     Return underneath Main Campus, then approach it.
  ===================================================== */

  "tour-complete": [
    { left: "77%", top: "69%" },
    { left: "72%", top: "72%" },
    { left: "50%", top: "72%" },
  ],
};

/* =====================================================
=====================================================
   ERICA DIALOGUE
===================================================== */

function showEricaDialogue(message) {
  if (!ericaDialogue || !ericaDialogueText) {
    return;
  }

  ericaDialogueText.textContent = message;

  ericaDialogue.classList.add("is-visible");

  positionEricaDialogue();
}


function hideEricaDialogue() {
  if (!ericaDialogue) {
    return;
  }

  ericaDialogue.classList.remove("is-visible");
}


/*
 * Keep Erica's dialogue bubble positioned
 * above her as she moves around the campus.
 */
function positionEricaDialogue() {
  if (!erica || !ericaDialogue) {
    return;
  }

  /*
   * Erica and her dialogue are both positioned
   * relative to the campus-life container.
   *
   * The dialogue follows Erica horizontally
   * and sits above her vertically.
   */
  ericaDialogue.style.left = erica.style.left;

  ericaDialogue.style.top = `calc(${erica.style.top} - 9%)`;
}


/* =====================================================
   ERICA INTRODUCTION
===================================================== */

/*
 * Erica automatically enters the campus when
 * the campus first loads.
 *
 * She walks in from off-screen, stops near the
 * Start Campus Tour button, and waits there.
 *
 * IMPORTANT:
 * This does NOT require the tour to be active.
 */
function introduceErica() {
  if (!erica) {
    return;
  }

  /*
   * Start just outside the left edge of campus.
   */
  erica.style.left = "-6%";
  erica.style.top = "72%";

  /*
   * Give the browser time to render Erica
   * in her starting position before moving her.
   */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {

      erica.classList.add("is-walking");

      /*
       * Walk toward the Start Campus Tour button.
       */
      erica.style.left =
        ericaTourStops["main-campus"].left;

      erica.style.top =
        ericaTourStops["main-campus"].top;

      /*
       * Wait until Erica reaches the button.
       */
      window.setTimeout(() => {

        erica.classList.remove("is-walking");

        /*
         * Erica waits here until the visitor
         * decides whether to start the tour.
         */
        showEricaDialogue(
          ericaTourStops["main-campus"].message
        );

      }, 1800);
    });
  });
}


/* =====================================================
   ERICA MOVEMENT
===================================================== */

/*
 * Move Erica to one waypoint.
 *
 * Returning a Promise allows the tour to wait
 * for Erica to reach each waypoint before
 * continuing to the next one.
 */
function walkEricaToWaypoint(
  waypoint,
  duration = 850
) {
  return new Promise((resolve) => {

    if (!erica) {
      resolve();
      return;
    }

    erica.classList.add("is-walking");

    erica.style.left = waypoint.left;
    erica.style.top = waypoint.top;

    /*
     * Keep the dialogue attached to Erica
     * while she moves.
     */
    positionEricaDialogue();

    window.setTimeout(() => {

      erica.classList.remove("is-walking");

      positionEricaDialogue();

      resolve();

    }, duration);
  });
}


/*
 * Walk Erica along the complete route
 * to a specific campus location.
 */
async function walkEricaRoute(locationId) {

  /*
   * Erica should only move between tour stops
   * when the guided tour is actually active.
   */
  if (!erica || !ericaTourActive) {
    return;
  }

  const route = ericaRoutes[locationId];
  const stop = ericaTourStops[locationId];

  if (!route || !stop) {
    return;
  }

  /*
   * Hide the previous message while Erica walks.
   */
  hideEricaDialogue();

  /*
   * Move through each waypoint in order.
   */
  for (const waypoint of route) {

    /*
     * Stop immediately if the visitor exits
     * the guided tour.
     */
    if (!ericaTourActive) {
      return;
    }

    await walkEricaToWaypoint(
      waypoint,
      850
    );
  }

  /*
   * Only show the destination message
   * after Erica has arrived.
   */
  if (!ericaTourActive) {
    return;
  }

  showEricaDialogue(stop.message);

  window.dispatchEvent(
    new CustomEvent("portfolio:erica-arrived", {
      detail: {
        locationId,
      },
    })
  );
}


/* =====================================================
   ERICA TOUR CONTROL
===================================================== */

/*
 * The visitor has clicked Start Campus Tour.
 *
 * Erica is already waiting at the starting
 * position, so she does NOT walk in again.
 */
function startEricaTour() {

  ericaTourActive = true;

  if (!erica) {
    return;
  }

  erica.classList.add("is-tour-guide");

  /*
   * Make sure Erica is at the starting
   * tour position.
   */
  erica.style.left =
    ericaTourStops["main-campus"].left;

  erica.style.top =
    ericaTourStops["main-campus"].top;

  /*
   * She is standing still before the first
   * tour movement begins.
   */
  erica.classList.remove("is-walking");

  /*
   * Keep the opening dialogue visible.
   */
  showEricaDialogue(
    ericaTourStops["main-campus"].message
  );
}


/*
 * Stop Erica's guided tour.
 */
function stopEricaTour() {

  ericaTourActive = false;

  if (!erica) {
    return;
  }

  erica.classList.remove(
    "is-tour-guide",
    "is-walking"
  );

  hideEricaDialogue();
}


/* =====================================================
   ERICA TOUR EVENTS
===================================================== */

/*
 * main.js communicates with Erica through
 * custom window events.
 */
window.addEventListener(
  "portfolio:erica-tour",
  (event) => {

    const action = event.detail?.action;

    /*
     * Guided tour has started.
     */
    if (action === "start") {
      startEricaTour();
      return;
    }

    /*
     * Guided tour has stopped.
     */
    if (action === "stop") {
      stopEricaTour();
      return;
    }

    /*
     * Erica should walk to the next
     * tour destination.
     */
    if (action === "move") {
      walkEricaRoute(
        event.detail?.locationId
      );
    }

    if (action === "complete") {
      completeEricaTour();
    return;
    }

    if (action === "hide-message") {
      hideEricaDialogue();
    return;
    }
  }
);

/* =====================================================
   ERICA TOUR COMPLETE
===================================================== */

async function completeEricaTour() {
  if (!erica) {
    return;
  }

  ericaTourActive = true;

  erica.classList.add(
    "is-tour-guide"
  );

  hideEricaDialogue();

  const route =
    ericaRoutes["tour-complete"];

  const stop =
    ericaTourStops["tour-complete"];

  for (const waypoint of route) {

    if (!ericaTourActive) {
      return;
    }

    await walkEricaToWaypoint(
      waypoint,
      850
    );
  }

  if (!ericaTourActive) {
    return;
  }

  showEricaDialogue(
    stop.message
  );

  window.dispatchEvent(
    new CustomEvent(
      "portfolio:erica-tour-finished"
    )
  );
}

/* =====================================================
   START ERICA AUTOMATICALLY
===================================================== */

/*
 * Erica enters the campus automatically
 * as soon as CampusLife is rendered.
 */
requestAnimationFrame(() => {
  introduceErica();
});


return life;

}