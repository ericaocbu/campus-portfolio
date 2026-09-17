export function About() {
  const about = document.createElement("div");

  about.classList.add("library-portfolio");

  about.innerHTML = `
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
          that make
          <strong>complex things feel simple.</strong>
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

      <span>
        ABOUT ERICA
      </span>

      <p>
        Get to know the designer and developer
        behind the campus.
      </p>

    </div>
  `;


  return about;
}