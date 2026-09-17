export function SectionView(
  location,
  onBack,
  options = {}
) {
  const section =
    document.createElement("section");

  section.classList.add("section-view");
  section.classList.add(
    `section-${location.id}`
  );

  const tourActive =
    options.tourActive === true;

  section.innerHTML = `
    <div class="section-content">

      <button
        class="back-to-campus"
        type="button"
      >
        ← BACK TO CAMPUS
      </button>

      ${
        tourActive
          ? `
            <div class="section-tour-indicator">
              <span class="section-tour-dot"></span>
              CAMPUS TOUR
            </div>
          `
          : ""
      }

      ${
        location.id === "main-campus"
          ? `
            <div class="home-portfolio">

              <!-- =========================================
                   HOME / CAMPUS INTRO
              ========================================== -->

              <div class="home-hero">

                <div class="home-hero-copy">

                  <div class="home-kicker">
                    <span class="home-kicker-line"></span>
                    WELCOME TO MY DIGITAL CAMPUS
                  </div>

                  <h1>
                    THIS IS
                    <span>MY CAMPUS.</span>
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

                  <span>01 / THE CONCEPT</span>

                  <h2>
                    THIS ISN'T
                    <br />
                    JUST A <em>PORTFOLIO.</em>
                  </h2>

                </div>

                <div class="home-about-content">

                  <p class="home-large-text">
                    Welcome to my
                    <strong>digital campus.</strong>
                  </p>

                  <p>
                    Inspired by my semester at NUS, I turned
                    my portfolio into a place you can actually
                    explore. Each building represents a
                    different part of my work, experience,
                    and life — so instead of scrolling through
                    a traditional portfolio, you can choose
                    where you want to go.
                  </p>

                  <div class="home-about-tags">

                    <span>EXPLORE FREELY</span>
                    <span>FOLLOW THE TOUR</span>
                    <span>DISCOVER MY WORK</span>
                    <span>MAKE YOUR OWN PATH</span>

                  </div>

                </div>

              </div>


              <!-- =========================================
                   EXPLORE DESTINATIONS
              ========================================== -->

              <div
                class="home-section home-explore"
                id="home-explore"
              >

                <div class="home-section-heading">

                  <span>02 / EXPLORE</span>

                  <h2>
                    WHERE SHOULD
                    <br />
                    WE <em>GO?</em>
                  </h2>

                </div>

                <div class="home-destination-grid">

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
                      <em>Projects</em>
                    </span>

                    <span class="destination-arrow">
                      →
                    </span>

                  </button>


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
                      <em>Experience</em>
                    </span>

                    <span class="destination-arrow">
                      →
                    </span>

                  </button>


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
                      <em>Contact</em>
                    </span>

                    <span class="destination-arrow">
                      →
                    </span>

                  </button>

                </div>

              </div>


              <!-- =========================================
                   CHOOSE HOW TO EXPLORE
              ========================================== -->

              <div class="home-process">

                <div class="home-process-label">
                  HOW WOULD YOU LIKE TO EXPLORE?
                </div>

                <div class="home-process-track">

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


                  <button
                    class="home-process-step home-path-option"
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

                <span>ERICA'S DIGITAL CAMPUS</span>

                <p>
                  Thanks for stopping by.
                  There's a lot to explore.
                </p>

              </div>

            </div>
          `

          : location.id === "library"
          ? `
            <div class="library-portfolio">

              <!-- =========================================
                   ABOUT ME
              ========================================== -->

              <div class="home-section library-about">

                <div class="home-section-heading">

                  <span>01 / ABOUT ME</span>

                  <h2>
                    HELLO,
                    <br />
                    <em>I'M ERICA.</em>
                  </h2>

                </div>

                <div class="home-about-content">

                  <p class="home-role">
                    FRONT-END DEVELOPER
                    <span>+</span>
                    UI/UX DESIGNER
                  </p>

                  <p class="home-large-text">
                    I design and build digital experiences
                    that make <strong>complex things feel simple.</strong>
                  </p>

                  <p>
                    I love working where
                    <strong>design, technology, and people</strong>
                    overlap. My background in Information
                    Science and Computer Science lets me
                    approach problems from both sides —
                    understanding what people need while also
                    understanding how to build it.
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
                   HOW I WORK
              ========================================== -->

              <div class="home-process library-process">

                <div class="home-process-label">
                  HOW I WORK
                </div>

                <div class="home-process-track">

                  <div class="home-process-step">

                    <span>01</span>

                    <strong>
                      RESEARCH
                    </strong>

                    <small>
                      Understand the people
                    </small>

                  </div>

                  <div class="home-process-connector"></div>

                  <div class="home-process-step">

                    <span>02</span>

                    <strong>
                      DEFINE
                    </strong>

                    <small>
                      Find the real problem
                    </small>

                  </div>

                  <div class="home-process-connector"></div>

                  <div class="home-process-step">

                    <span>03</span>

                    <strong>
                      DESIGN
                    </strong>

                    <small>
                      Turn ideas into experiences
                    </small>

                  </div>

                  <div class="home-process-connector"></div>

                  <div class="home-process-step">

                    <span>04</span>

                    <strong>
                      BUILD
                    </strong>

                    <small>
                      Make the experience real
                    </small>

                  </div>

                </div>

              </div>


              <!-- =========================================
                   LIBRARY FOOTER
              ========================================== -->

              <div class="home-footer-note">

                <span>ABOUT ERICA</span>

                <p>
                  Get to know the designer and developer
                  behind the campus.
                </p>

              </div>

            </div>
          `

          : `
            <span class="section-label">
              ${location.name}
            </span>

            <h1>
              ${location.section}
            </h1>

            <p>
              ${location.description}
            </p>
          `
      }

    </div>
  `;


  /*
   * BACK TO CAMPUS
   */

  const backButton =
    section.querySelector(
      ".back-to-campus"
    );

  backButton.addEventListener(
    "click",
    () => {
      onBack();
    }
  );


  /*
   * HOME SCROLL BUTTONS
   */

  const scrollButtons =
    section.querySelectorAll(
      "[data-scroll-to]"
    );

  scrollButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const target =
          section.querySelector(
            `#${button.dataset.scrollTo}`
          );

        if (target) {

          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }
    );

  });


  /*
   * HOME DESTINATION CARDS
   *
   * Clicking one of these returns the visitor
   * to the campus and opens the selected building.
   */

  const destinations =
    section.querySelectorAll(
      ".home-destination"
    );

  destinations.forEach((destination) => {

    destination.addEventListener(
      "click",
      () => {

        const id =
          destination.dataset.location;

        section.classList.remove(
          "is-active"
        );

        setTimeout(() => {
          section.remove();

          const destinationEvent =
            new CustomEvent(
              "portfolio:navigate",
              {
                detail: {
                  locationId: id,
                },
              }
            );

          window.dispatchEvent(
            destinationEvent
          );
        }, 350);

      }
    );

  });


  /*
   * HOME — CHOOSE YOUR PATH
   */

  const pathOptions =
    section.querySelectorAll(
      "[data-campus-action]"
    );

  pathOptions.forEach((option) => {

    option.addEventListener(
      "click",
      () => {

        const action =
          option.dataset.campusAction;

        if (action === "explore") {

          section.classList.remove(
            "is-active"
          );

          setTimeout(() => {

            section.remove();

            onBack();

          }, 350);

        }

        if (action === "tour") {

          section.classList.remove(
            "is-active"
          );

          setTimeout(() => {

            section.remove();

            const tourEvent =
              new CustomEvent(
                "portfolio:start-tour"
              );

            window.dispatchEvent(
              tourEvent
            );

            onBack();

          }, 350);

        }

      }
    );

  });


  return section;
}