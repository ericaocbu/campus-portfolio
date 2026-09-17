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
          experiences, and people
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
              My work sits at the intersection of
              people, design, and technology. I like
              understanding the problem first, figuring
              out what people actually need, and then
              turning that insight into an experience
              that works — and feels good to use.
            </p>

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
            at UNC.
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

        <h2>
          FROM RESEARCH
          <br />
          <em>TO INTERFACE.</em>
        </h2>

        <p>
          I move between research, design, and
          development throughout a project —
          not treating them as separate worlds.
        </p>

      </div>


      <div class="library-process-map">

        <div class="library-process-step">
          <span>01</span>
          <strong>RESEARCH</strong>
          <small>
            Understand people, context, and needs.
            Defining clear directions before design begins.
          </small>
        </div>

        <div class="library-process-line"></div>

        <div class="library-process-step">
          <span>02</span>
          <strong>DEFINE</strong>
          <small>
            Shaping ideas into concepts, structuring ideas and 
            features around real user goals.
          </small>
        </div>

        <div class="library-process-line"></div>

        <div class="library-process-step">
          <span>03</span>
          <strong>PROTOTYPE</strong>
          <small>
            Creating interactive prototypes using tools like Figma.
            Explore ideas before committing to code.
          </small>
        </div>

        <div class="library-process-line"></div>

        <div class="library-process-step">
          <span>04</span>
          <strong>TEST</strong>
          <small>
            Learn what works and what needs to change, 
            and refine usability through real feedback.
          </small>
        </div>

        <div class="library-process-line"></div>

        <div class="library-process-step">
          <span>05</span>
          <strong>BUILD</strong>
          <small>
            Turning designs into responsive, functional interfaces 
            while maintaining visual consistency, usability, and 
            attention to detail.
          </small>
        </div>

      </div>

    </section>


    <!-- =====================================================
         BEYOND THE SCREEN
    ====================================================== -->

    <section class="library-beyond">

      <div class="library-beyond-card">

        <span>LAST BOOK ON THE SHELF</span>

        <h2>
          THERE'S MORE
          <br />
          <em>TO ME.</em>
        </h2>

        <p>
          Design and development are a big part of
          my world, but they're not the whole story.
          Head over to the Dorms to see a little more
          of what exists beyond the screen.
        </p>

        <button
          type="button"
          class="library-beyond-button"
          data-location="utown"
        >
          VISIT THE DORMS
          <span>→</span>
        </button>

      </div>

    </section>


    <!-- =====================================================
         FOOTER
    ====================================================== -->

    <div class="home-footer-note library-footer">

      <span>THE ERICA LIBRARY</span>

      <p>
        Thanks for getting to know the person
        behind the portfolio! :)
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