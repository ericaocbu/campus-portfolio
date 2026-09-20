export function Contact({
  onBack,
  onStartTour,
  onNavigate,
} = {}) {
  const section = document.createElement("div");
  section.classList.add("canteen-portfolio");

  section.innerHTML = `
    <!-- =====================================================
         CANTEEN ENTRANCE
    ====================================================== -->

    <section class="canteen-entrance">

      <div class="canteen-window">

        <div class="canteen-window-frame">

          <div class="canteen-window-top">
            <span>My Favorites :)</span>
            <strong>FOOD CANTEEN</strong>
          </div>

          <div class="canteen-window-glass">
            <span class="canteen-window-glow"></span>
            <span class="canteen-window-line">
            <a
              href="https://delishar.com/2016/04/dry-beef-hor-fun.html"
              target="_blank"
              rel="noopener noreferrer">
              BEEF HOR FUN
            </a></span>
            <span class="canteen-window-line">
            <a>
              CHICKEN ALFREDO
            </a></span>
            <span class="canteen-window-line">
            <a
              href="https://guide.michelin.com/my/en/best-of/where-to-find-the-best-chicken-rice-in-singapore"
              target="_blank"
              rel="noopener noreferrer">
              SINGAPORE CHICKEN RICE
            </a></span>
          </div>

        </div>

      </div>


      <div class="canteen-entrance-copy">

        <span class="canteen-kicker">
          CAMPUS DINING · CONTACT
        </span>

        <h1>
          WHAT'S ON
          <br />
          <em>THE MENU?</em>
        </h1>

        <p>
          A little design, a little development,
          some research, and a lot of curiosity.
          Pull up a chair and stay awhile :)
        </p>

        <div class="canteen-entrance-note">
          <span>OPEN TODAY</span>
          <strong>09:00 — LATE...</strong>
        </div>

      </div>

    </section>


    <!-- =====================================================
         MENU BOARD
    ====================================================== -->

    <section class="canteen-menu-section">

      <div class="canteen-section-heading">

        <div class="canteen-section-number">
          <span>01</span>
          <i></i>
          <span>THE MENU</span>
        </div>

        <div class="canteen-heading-copy">

          <span class="canteen-small-label">
            TODAY'S SPECIALS
          </span>

          <h2>
            TAKE YOUR
            <br />
            <em>PICK.</em>
          </h2>

        </div>

      </div>


      <div class="canteen-menu-board">

        <div class="canteen-menu-board-header">
          <span>ERICA'S CANTEEN</span>
          <strong>CONTACT MENU</strong>
          <span>EST. 2026</span>
        </div>


        <div class="canteen-menu-intro">

          <span>FRESH FROM THE CAMPUS</span>

          <p>
            Looking to connect, collaborate, or just say hello?
            Choose what's on the menu.
          </p>

        </div>


        <div class="canteen-menu-items">

          <!-- EMAIL -->

          <button
            type="button"
            class="canteen-menu-item"
            data-contact="email"
          >

            <span class="canteen-menu-item-number">
              01
            </span>

            <span class="canteen-menu-item-main">

              <strong>
                EMAIL
              </strong>

              <small>
                COFFEE CHAT
              </small>

            </span>

            <span class="canteen-menu-item-description">
              Email me with any questions you might have!
            </span>

            <span class="canteen-menu-item-arrow">
              →
            </span>

          </button>


          <!-- LINKEDIN -->

          <button
            type="button"
            class="canteen-menu-item"
            data-contact="linkedin"
          >

            <span class="canteen-menu-item-number">
              02
            </span>

            <span class="canteen-menu-item-main">

              <strong>
                LinkedIn
              </strong>

              <small>
                CAMPUS CONNECTION
              </small>

            </span>

            <span class="canteen-menu-item-description">
              Connect with me and follow
              along with what's going on in my career.
            </span>

            <span class="canteen-menu-item-arrow">
              →
            </span>

          </button>


          <!-- GITHUB -->

          <button
            type="button"
            class="canteen-menu-item"
            data-contact="github"
          >

            <span class="canteen-menu-item-number">
              03
            </span>

            <span class="canteen-menu-item-main">

              <strong>
                GitHub
              </strong>

              <small>
                OPEN SOURCE
              </small>

            </span>

            <span class="canteen-menu-item-description">
              Explore the code behind
              my projects and experiments.
            </span>

            <span class="canteen-menu-item-arrow">
              →
            </span>

          </button>


          <!-- RESUME -->

          <button
            type="button"
            class="canteen-menu-item"
            data-contact="resume"
          >

            <span class="canteen-menu-item-number">
              04
            </span>

            <span class="canteen-menu-item-main">

              <strong>
                Resume
              </strong>

              <small>
                DAILY SPECIAL
              </small>

            </span>

            <span class="canteen-menu-item-description">
              A quick look at my experience,
              education, and skills.
            </span>

            <span class="canteen-menu-item-arrow">
              →
            </span>

          </button>

        </div>


        <div class="canteen-menu-board-footer">
          <span>PLEASE ORDER AT THE COUNTER</span>
          <span>THANK YOU</span>
        </div>

      </div>

    </section>

    
    <!-- =====================================================
         COUNTER / FINAL CTA
    ====================================================== -->

    <section class="canteen-counter-section">

      <div class="canteen-counter">

        <div class="canteen-counter-sign">
          <span>ORDER WINDOW</span>

          <strong>
            SAY HELLO.
          </strong>

          <small>
            YOU'RE ALWAYS WELCOME HERE.
          </small>
        </div>


        <div class="canteen-counter-register">

          <span class="register-screen">
            READY
          </span>

          <span class="register-body"></span>

          <span class="register-button button-one"></span>
          <span class="register-button button-two"></span>
          <span class="register-button button-three"></span>

        </div>


        <div class="canteen-counter-ticket">

          <span>
            ORDER #006
          </span>

          <strong>
            THANKS FOR
            <br />
            STOPPING BY.
          </strong>

        </div>

      </div>

    </section>


    <!-- =====================================================
         FOOTER
    ====================================================== -->

    <footer class="canteen-footer">

      <span>
        THE ERICA CANTEEN
      </span>

      <i></i>

      <span>
        END OF MENU
      </span>

    </footer>
  `;


  /* =====================================================
     CONTACT LINKS
  ====================================================== */

  const contactLinks = {
    email: "mailto:ericaocbu@gmail.com",

    linkedin:
      "https://www.linkedin.com/in/erica-ocbu-157a51237/",

    github:
      "YOUR_GITHUB_URL_HERE",

    resume:
      "https://docs.google.com/document/d/1oWIFFFn8HCQ5NWvscC9ARSJkkdW-fAgP/edit?usp=sharing&ouid=108500505334719885937&rtpof=true&sd=true",
  };


  section
    .querySelectorAll(".canteen-menu-item")
    .forEach((item) => {

      item.addEventListener("click", () => {

        const type =
          item.dataset.contact;

        const url =
          contactLinks[type];

        if (!url) return;

        window.open(
          url,
          "_blank",
          "noopener,noreferrer"
        );

      });

    });

  return section;
}