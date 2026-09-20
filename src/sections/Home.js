import { campus } from "../data/campus.js";

export function Home({
  onBack,
  onStartTour,
  onNavigate,
}) {
  const home = document.createElement("div");

  home.classList.add("home-portfolio");

  home.innerHTML = `
    <!-- =========================================
         HOME / CAMPUS INTRO
    ========================================== -->

    <div class="home-hero">

      <div class="home-hero-copy">

        <div class="home-kicker">
          <span class="home-kicker-line"></span>
          THIS IS MY DIGITAL CAMPUS
        </div>

        <h1>
          WELCOME TO
          <span>STUDENT UNION!</span>
        </h1>

        <p class="home-intro">
          A portfolio designed like a place
          you can actually explore. Move through
          the campus to discover my work,
          experience, and the person behind it.
        </p>

        <div class="home-hero-actions">

          <button
            class="home-primary-action"
            type="button"
            data-scroll-to="home-about"
          >
            THE CONCEPT
            <span>↓</span>
          </button>

          <button
            class="home-secondary-action"
            type="button"
            data-scroll-to="home-explore"
          >
            EXPLORE THE CAMPUS
            <span>↗</span>
          </button>

        </div>

      </div>


      <!-- =========================================
           CAMPUS VISUAL
      ========================================== -->

      <div class="home-visual">

        <div class="home-visual-orbit orbit-one"></div>
        <div class="home-visual-orbit orbit-two"></div>

        <div class="home-visual-card">

          <span class="home-card-number">
            01
          </span>

          <div class="home-card-building">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="home-card-label">
            <small>WELCOME TO</small>

            <strong>
              ERICA'S
              <br />
              DIGITAL
              <br />
              CAMPUS
            </strong>
          </div>

        </div>


        <div class="home-floating-note note-design">
          <span>✦</span>
          USER-CENTERED
          <br />
          DESIGN
        </div>


        <div class="home-floating-note note-code">
          <span>⌘</span>
          FRONT-END
          <br />
          DEVELOPMENT
        </div>

      </div>

    </div>


    <!-- =========================================
         THE CONCEPT
    ========================================== -->

    <div
      class="home-section"
      id="home-about"
    >

      <div class="home-section-heading">

        <span>
          01 / THE CONCEPT
        </span>

        <h2>
          WHY ARE WE
          <br />
          BACK ON <em>CAMPUS?!</em>
        </h2>

      </div>


      <div class="home-about-content">

        <p class="home-large-text">
          Instead of moving through a traditional
          scrolling portfolio, you can explore my
          work the way you might explore a university
          campus.
        </p>

        <p>
          The idea was inspired by my semester at
          the National University of Singapore.
          I wanted to bring that feeling of moving
          between different places, discovering
          something new around every corner, into
          my portfolio.
        </p>

        <p>
          Every building has a purpose and every path
          leads somewhere. And you decide where
          you want to go next. You can explore freely or take a guided tour
          with Orientation Leader Erica!
        </p>

        <p>
          After you're done looking through campus, stick around and 
          try to find some <i>discoveries</i> on <i>campus</i> (hint: there's 6 of them!)
        </p>


        <div class="home-about-tags">

          <span>UX RESEARCH</span>
          <span>UI DESIGN</span>
          <span>FRONT-END</span>
          <span>ACCESSIBILITY</span>

        </div>

      </div>

    </div>


    <!-- =========================================
         EXPLORE
    ========================================== -->

    <div
      class="home-section home-explore"
      id="home-explore"
    >

      <div class="home-section-heading">

        <span>
          02 / EXPLORE
        </span>

        <h2>
          WHERE SHOULD
          <br />
          WE <em>GO?</em>
        </h2>

      </div>


      <div class="home-destination-grid">

        <!-- LIBRARY -->

        <button
          class="home-destination"
          type="button"
          data-location="library"
        >

          <span class="destination-number">
            01
          </span>

          <span class="destination-icon">
            ◫
          </span>

          <span class="destination-text">
            <small>VISIT THE</small>
            <strong>LIBRARY</strong>
            <em>About Me</em>
          </span>

          <span class="destination-arrow">
            →
          </span>

        </button>


        <!-- INNOVATION LAB -->

        <button
          class="home-destination"
          type="button"
          data-location="innovation-lab"
        >

          <span class="destination-number">
            02
          </span>

          <span class="destination-icon">
            ◇
          </span>

          <span class="destination-text">
            <small>ENTER THE</small>
            <strong>INNOVATION LAB</strong>
            <em>My Projects</em>
          </span>

          <span class="destination-arrow">
            →
          </span>

        </button>


        <!-- LECTURE HALL -->

        <button
          class="home-destination"
          type="button"
          data-location="lecture-hall"
        >

          <span class="destination-number">
            03
          </span>

          <span class="destination-icon">
            □
          </span>

          <span class="destination-text">
            <small>STEP INTO THE</small>
            <strong>LECTURE HALL</strong>
            <em>My Experience</em>
          </span>

          <span class="destination-arrow">
            →
          </span>

        </button>


        <!-- FOOD CANTEEN -->

        <button
          class="home-destination"
          type="button"
          data-location="food-canteen"
        >

          <span class="destination-number">
            04
          </span>

          <span class="destination-icon">
            ○
          </span>

          <span class="destination-text">
            <small>STOP BY THE</small>
            <strong>FOOD CANTEEN</strong>
            <em>Contact Me</em>
          </span>

          <span class="destination-arrow">
            →
          </span>

        </button>


        <!-- THE DORMS -->

        <button
          class="home-destination"
          type="button"
          data-location="utown"
        >

          <span class="destination-number">
            05
          </span>

          <span class="destination-icon">
            ✦
          </span>

          <span class="destination-text">
            <small>VISIT</small>
            <strong>THE DORMS</strong>
            <em>Outside of work</em>
          </span>

          <span class="destination-arrow">
            →
          </span>

        </button>

      </div>

    </div>


    <!-- =========================================
         HOW WOULD YOU LIKE TO EXPLORE?
    ========================================== -->

    <div class="home-process">

      <div class="home-process-label">
        HOW WOULD YOU LIKE TO EXPLORE?
      </div>


      <div class="home-process-track">

        <!-- EXPLORE FREELY -->

        <button
          class="home-process-step home-path-option"
          type="button"
          data-campus-action="explore"
        >

          <span>01</span>

          <strong>
            YOUR WAY
          </strong>

          <small>
            Explore the campus freely
            and choose where you want to go.
          </small>

          <b>
            EXPLORE FREELY →
          </b>

        </button>


        <!-- GUIDED TOUR -->

        <button
          class="home-process-step home-path-option guided-tour"
          type="button"
          data-campus-action="tour"
        >

          <span>02</span>

          <strong>
            GUIDED
          </strong>

          <small>
            Follow the campus tour and
            discover each destination in order.
          </small>

          <b>
            START THE TOUR →
          </b>

        </button>

      </div>

    </div>


    <!-- =========================================
         FOOTER
    ========================================== -->

    <div class="home-footer-note">

      <span>
        ERICA'S DIGITAL CAMPUS
      </span>

      <p>
        Thanks for stopping by.
        There's a lot to explore.
      </p>

    </div>
  `;


  /*
   * SCROLL BUTTONS
   */

  const scrollButtons =
    home.querySelectorAll("[data-scroll-to]");

  scrollButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const targetId =
        button.dataset.scrollTo;

      const target =
        home.querySelector(`#${targetId}`);

      if (target) {

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    });

  });


  /*
   * EXPLORE FREELY
   */

  const exploreButton =
    home.querySelector(
      '[data-campus-action="explore"]'
    );

  if (exploreButton) {

    exploreButton.addEventListener(
      "click",
      () => {
        onBack();
      }
    );

  }


  /*
   * START CAMPUS TOUR
   */

  const tourButton =
    home.querySelector(
      '[data-campus-action="tour"]'
    );

  if (tourButton && onStartTour) {

    tourButton.addEventListener(
      "click",
      () => {
        onStartTour();
      }
    );

  }


  /*
   * DESTINATION BUTTONS
   */

  const destinationButtons =
    home.querySelectorAll(
      "[data-location]"
    );

  destinationButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const locationId =
          button.dataset.location;

        const destination =
          campus.locations.find(
            (item) =>
              item.id === locationId
          );

        if (
          destination &&
          onNavigate
        ) {
          onNavigate(destination);
        }

      }
    );

  });


  return home;
}