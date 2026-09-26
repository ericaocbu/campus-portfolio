import { campus } from "../data/campus.js";

export function About({
  onBack,
  onStartTour,
  onNavigate,
} = {}) {

  const portfolio =
    document.createElement("div");

  portfolio.classList.add(
    "library-portfolio"
  );

  portfolio.innerHTML = `

    <!-- =====================================================
         LIBRARY ENTRANCE
    ====================================================== -->

    <div class="library-entrance">

      <div class="library-entrance-sign">
        <span>EST. 2026</span>

        <strong>
          THE ERICA<br />
          LIBRARY
        </strong>

        <small>
          DESIGN • CODE • HCI
        </small>
      </div>


      <!--
        Library window instead of the old door.
        The shelves inside make the space immediately
        read as a library without competing with the sign.
      -->

      <div class="library-window">

        <div class="library-window-arch">

          <div class="library-window-crossbar"></div>

          <div class="library-window-shelf shelf-one">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="library-window-shelf shelf-two">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="library-window-lamp">
            <i></i>
          </div>

        </div>

        <small class="library-window-label">
          ARCHIVES / 001
        </small>

      </div>


      <div class="library-entrance-note">
        <span>ABOUT</span>

        <p>
          A collection of the ideas,
          experiences, and skills
          that shaped how I design.
        </p>
      </div>

    </div>


    <!-- =====================================================
         01 / ABOUT ME
    ====================================================== -->

    <section
      class="library-intro"
      id="library-about"
    >

      <div class="library-section-index">
        <span>01</span>
        <i></i>
        <span>ABOUT ME</span>
      </div>


      <div class="library-open-book">

        <!-- LEFT PAGE -->

        <div class="library-book-page library-book-page-left">

          <div class="library-page-top">
            <span>VOLUME I</span>
            <span>01</span>
          </div>

          <div class="library-page-number">
            01
          </div>

          <div class="library-page-stamp">
            THE ERICA<br />
            LIBRARY
          </div>

        </div>


        <!-- BOOK BINDING -->

        <div class="library-book-binding">
          <span></span>
        </div>


        <!-- RIGHT PAGE -->

        <div class="library-book-page library-book-page-right">

          <p class="library-eyebrow">
            HELLO, I'M ERICA.
          </p>

          <h1>
            DESIGNER
            <em>+</em>
            DEVELOPER.
          </h1>

          <div class="library-intro-copy">

            <p class="library-role">
              FRONT-END DEVELOPER
              <span>×</span>
              UI/UX DESIGNER
            </p>

            <p>
              I design and build digital experiences
              that make complex things feel
              <strong>clear, approachable, and human.</strong>
            </p>

            <p>
              I like understanding the problem first, 
              figuring out what people actually need, 
              and then turning those findings into an 
              experience that works and feels good to use.
            </p>

          </div>

          <div class="library-resume-card">

            <div class="library-resume-card-top">
              <span>THE ERICA LIBRARY</span>
              <span>REF. 001</span>
            </div>

            <div class="library-resume-card-main">
              <div>
                <span class="library-resume-label">
                  PROFESSIONAL RECORD
                </span>

                <strong>
                  RESUME
                </strong>

                <small>
                  EXPERIENCE · EDUCATION · SKILLS
                </small>
              </div>

              <span class="library-resume-stamp">
                AVAILABLE
              </span>
            </div>

            <a
              class="library-resume-button"
              href="/resume.pdf"
              download
            >
              DOWNLOAD RESUME
            </a>

          </div>

        </div>

      </div>


      <div class="library-bookmark-row">
        <span>INFORMATION SCIENCE</span>
        <span>COMPUTER SCIENCE</span>
        <span>HUMAN-CENTERED DESIGN</span>
      </div>

    </section>


    <!-- =====================================================
         02 / MY BACKGROUND
    ====================================================== -->

    <section
      class="library-background"
      id="library-background"
    >

      <div class="library-section-index">
        <span>02</span>
        <i></i>
        <span>MY BACKGROUND</span>
      </div>


      <div class="library-shelf-layout">

        <div class="library-shelf-intro">

          <p class="library-big-note">
            Every chapter has added another way
            for me to understand how people and
            technology connect.
          </p>

          <div class="library-shelf-caption">
            <span>SELECTED VOLUMES</span>
            <i></i>
            <span>2022 — PRESENT</span>
          </div>

        </div>


        <div class="library-bookshelf">

          <!-- UNC -->

          <div class="library-book library-book-unc">

            <span>UNC</span>

            <strong>
              CHAPEL<br />
              HILL
            </strong>

            <small>
              2022 — 2026
            </small>

          </div>


          <!-- NUS -->

          <div class="library-book library-book-nus">

            <span>NUS</span>

            <strong class="library-book-vertical">
              SINGAPORE
            </strong>

            <small>
              FALL 2025
            </small>

          </div>


          <!-- LOCUS -->

          <div class="library-book library-book-work">

            <span>LOCUS</span>

            <strong>
              FRONT-END<br />
              UI DEVELOPER
            </strong>

            <small>
              2026 — PRESENT
            </small>

          </div>


          <div class="library-shelf"></div>

        </div>

      </div>


      <div class="library-timeline">

        <div>
          <span>2022</span>

          <p>
            Started exploring the intersection
            of information, people, and technology
            during my first year at UNC.
          </p>
        </div>


        <div>
          <span>2025</span>

          <p>
            Studied Abroad at the National University of Singapore (NUS)! 
            Taking Interaction Design (CS3240)
            and working with teammates from
            different backgrounds.
          </p>
        </div>


        <div>
          <span>2026</span>

          <p>
            Graduated with degrees in Information
            Science and Computer Science and began
            working as a Front-End UI Developer.
          </p>
        </div>

      </div>

    </section>


  <!-- =========================================
         03 — SKILLS
    ========================================== -->

    <section class="library-skills">

      <div class="library-section-heading">

        <span class="library-section-number">
          03
        </span>

        <div>
          <span class="library-section-label">
            SKILLS
          </span>

          <h2>
            WHAT'S ON
            <em>THE SHELF.</em>
          </h2>
        </div>

      </div>


      <p class="library-skills-intro">
        A mix of design, development, and
        information skills that let me move
        from understanding a problem to
        building the experience.
      </p>


      <div class="library-skills-grid">

        <!-- DESIGN -->

        <article class="library-skill-card">

          <div class="library-skill-card-header">
            <span>01</span>
            <strong>DESIGN</strong>
          </div>

          <p>
            Turning research and ideas into
            clear, usable experiences.
          </p>

          <div class="library-skill-list">
            <span>UI/UX DESIGN</span>
            <span>USER RESEARCH</span>
            <span>WIREFRAMING</span>
            <span>PROTOTYPING</span>
            <span>INTERACTION DESIGN</span>
            <span>FIGMA</span>
            <span>USABILITY TESTING</span>
            <span>ACCESSIBILITY</span>
          </div>

        </article>


        <!-- DEVELOPMENT -->

        <article class="library-skill-card">

          <div class="library-skill-card-header">
            <span>02</span>
            <strong>DEVELOPMENT</strong>
          </div>

          <p>
            Bringing designs to life through
            responsive front-end development.
          </p>

          <div class="library-skill-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
            <span>REACT</span>
            <span>RESPONSIVE DESIGN</span>
            <span>GIT / GITHUB</span>
            <span>FRONT-END DEVELOPMENT</span>
          </div>

        </article>


        <!-- INFORMATION -->

        <article class="library-skill-card">

          <div class="library-skill-card-header">
            <span>03</span>
            <strong>INFORMATION</strong>
          </div>

          <p>
            Organizing information so people
            can actually understand and use it.
          </p>

          <div class="library-skill-list">
            <span>INFORMATION ARCHITECTURE</span>
            <span>USER FLOWS</span>
            <span>INFORMATION RETRIEVAL</span>
            <span>DATA & INFORMATION SYSTEMS</span>
            <span>DATABASE CONCEPTS</span>
          </div>

        </article>


        <!-- TOOLS + METHODS -->

        <article class="library-skill-card">

          <div class="library-skill-card-header">
            <span>04</span>
            <strong>TOOLS + METHODS</strong>
          </div>

          <p>
            The tools and approaches I use
            throughout the design process.
          </p>

          <div class="library-skill-list">
            <span>FIGMA</span>
            <span>VS CODE</span>
            <span>GITHUB</span>
            <span>DESIGN SYSTEMS</span>
            <span>DESIGN THINKING</span>
            <span>USER-CENTERED DESIGN</span>
            <span>DESIGN PRINCIPLES</span>
          </div>

        </article>

      </div>

    </section>

    <!-- =====================================================
     04 / HOW I WORK
    ====================================================== -->

    <section
      class="library-process"
      id="library-process"
    >

      <div class="library-section-index">
        <span>04</span>
        <i></i>
        <span>HOW I WORK</span>
      </div>


      <div class="library-process-header">

        <div class="library-process-title-wrap">

          <span class="library-process-catalog">
            REFERENCE DESK · CATALOG NO. 004
          </span>

          <h2>
            FROM RESEARCH
            <br />
            <em>TO INTERFACE.</em>
          </h2>

        </div>

        <div class="library-process-note">

          <span class="library-note-label">
            FIELD NOTE
          </span>

          <p>
            I move between research, design, and
            development throughout a project.
          </p>

        </div>

      </div>


      <div class="library-reading-table">

        <div class="library-table-top">

          <div class="library-table-label">
            <span>MY WORKING METHOD</span>
            <strong>REFERENCE MATERIAL</strong>
          </div>

          <div class="library-table-card">
            <span>PROCESS</span>
            <strong>LISTEN → THINK → MAKE → REFINE</strong>
          </div>

        </div>


        <div class="library-process-books">

          <!-- RESEARCH -->

          <article class="library-process-book">

            <div class="library-process-book-spine">
              <span>01</span>
            </div>

            <div class="library-process-book-cover">

              <span class="library-process-book-type">
                VOLUME I
              </span>

              <strong>
                RESEARCH
              </strong>

              <p>
                Understand people, context,
                and needs.
              </p>

              <span class="library-process-book-footer">
                BEGIN WITH CURIOSITY
              </span>

            </div>

          </article>


          <!-- DEFINE -->

          <article class="library-process-book">

            <div class="library-process-book-spine">
              <span>02</span>
            </div>

            <div class="library-process-book-cover">

              <span class="library-process-book-type">
                VOLUME II
              </span>

              <strong>
                DEFINE
              </strong>

              <p>
                Shape ideas around real
                user goals.
              </p>

              <span class="library-process-book-footer">
                FIND THE PROBLEM
              </span>

            </div>

          </article>


          <!-- PROTOTYPE -->

          <article class="library-process-book">

            <div class="library-process-book-spine">
              <span>03</span>
            </div>

            <div class="library-process-book-cover">

              <span class="library-process-book-type">
                VOLUME III
              </span>

              <strong>
                PROTOTYPE
              </strong>

              <p>
                Explore ideas before
                committing to code.
              </p>

              <span class="library-process-book-footer">
                MAKE IT TANGIBLE
              </span>

            </div>

          </article>


          <!-- TEST -->

          <article class="library-process-book">

            <div class="library-process-book-spine">
              <span>04</span>
            </div>

            <div class="library-process-book-cover">

              <span class="library-process-book-type">
                VOLUME IV
              </span>

              <strong>
                TEST
              </strong>

              <p>
                Learn what works,
                then refine.
              </p>

              <span class="library-process-book-footer">
                LISTEN + ITERATE
              </span>

            </div>

          </article>


          <!-- BUILD -->

          <article class="library-process-book library-process-book-featured">

            <div class="library-process-book-spine">
              <span>05</span>
            </div>

            <div class="library-process-book-cover">

              <span class="library-process-book-type">
                VOLUME V
              </span>

              <strong>
                BUILD
              </strong>

              <p>
                Turn the design into
                a functional experience.
              </p>

              <span class="library-process-book-footer">
                BRING IT TO LIFE
              </span>

            </div>

          </article>

        </div>


        <div class="library-table-bottom">
          <span>
            EVERY PROJECT HAS ITS OWN CHAPTER.
          </span>

          <span>
            01 — 05
          </span>

        </div>

      </div>

    </section>


<!-- =====================================================
     BEYOND THE SCREEN
====================================================== -->

<section class="library-beyond">

  <div class="library-return-cart">

    <!-- CART HANDLE -->

    <div class="library-cart-handle">
      <span></span>
      <span></span>
    </div>


    <!-- CART BODY -->

    <div class="library-cart-body">

      <div class="library-cart-header">

        <div>
          <span>LIBRARY SERVICES</span>

          <strong>
            RETURN CART
          </strong>
        </div>

        <span class="library-cart-number">
          CART NUM 005
        </span>

      </div>


      <!-- BOOKS -->

      <div class="library-cart-books">

        <div class="library-cart-book cart-book-one">

          <span>VOLUME</span>

          <strong>
            DESIGN<br />
            + CODE
          </strong>

          <small>
            ERICA'S LIBRARY
          </small>

        </div>


        <div class="library-cart-book cart-book-two">

          <span>VOLUME</span>

          <strong>
            BEYOND<br />
            THE SCREEN
          </strong>

          <small>
            CONTINUED...
          </small>

        </div>


        <div class="library-cart-book cart-book-three">

          <span>VOLUME</span>

          <strong>
            LIFE<br />
            OFFLINE
          </strong>

          <small>
            NEXT CHAPTER
          </small>

        </div>

      </div>


      <!-- RETURN SLIP -->

      <div class="library-return-slip">

        <span class="library-return-slip-label">
          FINAL VOLUME
        </span>

        <h2>
          THERE'S MORE
          <br />
          <em>TO ME.</em>
        </h2>

        <p>
          Design and development are a big part of
          my world, but they're not the whole story.
          There's a little more to discover beyond
          the screen.
        </p>

        <div class="library-return-slip-footer">

          <span>
            DESTINATION
            <strong>THE DORMS</strong>
          </span>

          <button
            type="button"
            class="library-beyond-button"
            data-location="utown"
          >
            CONTINUE READING
            <span>→</span>
          </button>

        </div>

      </div>

    </div>


    <!-- CART WHEELS -->

    <div class="library-cart-wheel library-cart-wheel-left"></div>
    <div class="library-cart-wheel library-cart-wheel-right"></div>

  </div>

</section>


    <!-- =====================================================
         FOOTER
    ====================================================== -->

    <div class="home-footer-note library-footer">

      <span>THE ERICA LIBRARY</span>

      <p>
        Thanks for getting to know me! :)
      </p>

    </div>

  `;


   /*
   * VISIT THE DORM
   */

  const beyondButton =
    portfolio.querySelector(
      ".library-beyond-button"
    );

  if (beyondButton) {

    beyondButton.addEventListener(
      "click",
      () => {

        const utown =
          campus.locations.find(
            (location) =>
              location.id === "utown"
          );

        if (utown && onNavigate) {
          onNavigate(utown);
        }

      }
    );

  }

  return portfolio;
}