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
        "Some things are meant to be noticed. Others are meant to be discovered.",
    },

    "campus-cat": {
      title: "THE CAMPUS CAT",
      text:
        "It doesn't work here...it simply lives here.",
    },

    recycling: {
      title: "RECYCLING",
      text:
        "Small choices help keep the campus clean.",
    },

    "bike-rack": {
      title: "BIKE RACK",
      text:
        "A favorite stop for getting around campus.",
    },

    flowers: {
      title: "CAMPUS GARDEN",
      text:
        "A little color growing between the paths.",
    },

    fountain: {
      title: "CAMPUS FOUNTAIN",
      text:
        "A quiet place to pause between destinations.",
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
            ? "You found every hidden detail."
            : "There are still a few things hiding around campus.";


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


  return life;
}