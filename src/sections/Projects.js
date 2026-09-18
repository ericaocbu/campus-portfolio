import { projects } from "../data/projects.js";
import { ProjectCard } from "../components/ProjectCard.js";

export function Projects() {
  const page = document.createElement("div");

  page.className = "innovation-lab-page";

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const archiveProjects = projects.filter(
    (project) => !project.featured
  );

  page.innerHTML = `
    <div class="lab-blueprint"></div>

    <!-- =================================================
         HERO
    ================================================== -->

    <header class="lab-hero">

      <div class="lab-hero-top">

        <div class="lab-location">
          INNOVATION LAB
        </div>

      </div>

      <div class="lab-hero-grid">

        <div class="lab-hero-title">

          <span class="lab-eyebrow">
            DESIGN + DEVELOPMENT STUDIO
          </span>

          <h1>
            THE <br/>BLUEPRINTS <br/>INTO
            <em>MY PROJECTS.</em>
          </h1>

        </div>

        <div class="lab-hero-copy">

          <p>
            Research, interaction, and front-end development
            meet in the projects I design and build!
          </p>

          <div class="lab-hero-note">
            <span>LAB FOCUS →</span>
            HUMAN-CENTERED DIGITAL EXPERIENCES
          </div>

        </div>

      </div>

      <div class="lab-focus-strip">

        <span>UX DESIGN</span>
        <span>USER RESEARCH</span>
        <span>PROTOTYPING</span>
        <span>FRONT-END</span>

      </div>

    </header>


    <!-- =================================================
         FEATURED PROJECT
    ================================================== -->

    <section class="lab-featured">

      <div class="lab-section-heading">

        <div>
          <span class="lab-section-number">01</span>
          <span>FEATURED EXPERIMENT</span>
        </div>

        <span>
          CURRENT WORK
        </span>

      </div>

      <div class="featured-project-slot"></div>

    </section>


    <!-- =================================================
         PROJECT ARCHIVE
    ================================================== -->

    <section class="lab-archive">

      <div class="lab-section-heading">

        <div>
          <span class="lab-section-number">02</span>
          <span>STUDIO ARCHIVE</span>
        </div>

        <span>
          SELECTED WORK
        </span>

      </div>

      <div class="studio-project-grid"></div>

    </section>


    <!-- =================================================
         LAB NOTES
    ================================================== -->

    <section class="lab-notes">

      <div class="lab-section-heading">

        <div>
          <span class="lab-section-number">03</span>
          <span>LAB NOTES</span>
        </div>

        <span>
          HOW I THINK
        </span>

      </div>

      <div class="lab-notes-grid">

        <article class="lab-note">

          <span>01</span>

          <h3>
            DESIGN IS
            <em>ITERATIVE.</em>
          </h3>

          <p>
            My first idea is <i>rarely</i> my final one.
            (This portfolio for example...)
            Research, testing, and reflection help
            me continuously refine an experience.
          </p>

        </article>


        <article class="lab-note">

          <span>02</span>

          <h3>
            PEOPLE BEFORE
            <em>FEATURES.</em>
          </h3>

          <p>
            I focus on the problem behind the interface,
            not just the interface itself.
          </p>

        </article>


        <article class="lab-note">

          <span>03</span>

          <h3>
            DESIGN
            <em>→ BUILD.</em>
          </h3>

          <p>
            I like taking ideas beyond the prototype
            and seeing how they work as real interfaces.
          </p>

        </article>

      </div>

    </section>


    <!-- =================================================
         CURRENTLY IN THE LAB
    ================================================== -->

    <section class="lab-current">

      <div class="lab-section-heading">

        <div>
          <span class="lab-section-number">04</span>
          <span>CURRENTLY IN THE LAB</span>
        </div>

        <span>
          IN DEVELOPMENT
        </span>

      </div>


      <div class="lab-current-grid">

        <article class="current-project">

          <div class="current-project-top">
            <span>05</span>
            <span>IN DEVELOPMENT</span>
          </div>

          <div class="current-project-content">

            <div>

              <span class="current-project-label">
                RESEARCH / UX / PROTOTYPING
              </span>

              <h3>
                FINANCIAL AID +
                <br />
                SCHOLARSHIP
                <em>NAVIGATOR.</em>
              </h3>

              <p>
                An exploration of how students can more easily
                discover, organize, and navigate financial aid
                and scholarship opportunities.
              </p>

            </div>

            <span class="current-project-arrow">
              05 →
            </span>

          </div>

        </article>


        <article class="current-project current-project-alt">

          <div class="current-project-top">
            <span>06</span>
            <span>IN DEVELOPMENT</span>
          </div>

          <div class="current-project-content">

            <div>

              <span class="current-project-label">
                UX / PROTOTYPING / FRONT-END
              </span>

              <h3>
                TRAVEL
                <br />
                PLANNING
                <em>TOOL.</em>
              </h3>

              <p>
                An exploration of how research, planning,
                and interactive design can turn complicated
                travel decisions into a clearer experience.
              </p>

            </div>

            <span class="current-project-arrow">
              06 →
            </span>

          </div>

        </article>

      </div>

    </section>


    <!-- =================================================
         LAB FOOTER
    ================================================== -->

    <footer class="lab-footer">

      <div>
        INNOVATION LAB
      </div>

      <p>
        More experiments are always in development :)
      </p>

      <span>
        END OF ARCHIVE →
      </span>

    </footer>
  `;


  /* =====================================================
     RENDER PROJECTS
  ===================================================== */

  const featuredSlot = page.querySelector(
    ".featured-project-slot"
  );

  const archiveGrid = page.querySelector(
    ".studio-project-grid"
  );


  if (featuredProject) {
    featuredSlot.appendChild(
      ProjectCard(
        featuredProject,
        openProject,
        { featured: true }
      )
    );
  }


  archiveProjects.forEach((project) => {
    archiveGrid.appendChild(
      ProjectCard(project, openProject)
    );
  });


  /* =====================================================
     PROJECT DETAIL VIEW
  ===================================================== */

  function openProject(project) {
    const existing = page.querySelector(
      ".project-case-study"
    );

    if (existing) {
      existing.remove();
    }

    const caseStudy = createCaseStudy(project);

    document.body.appendChild(caseStudy);

    requestAnimationFrame(() => {
      caseStudy.classList.add("is-visible");
    });

    document.body.classList.add(
      "case-study-open"
    );
  }


  function createCaseStudy(project) {
    const caseStudy =
      document.createElement("div");

    caseStudy.className = [
      "project-case-study",
      `case-study-${project.accent}`,
    ].join(" ");


    const processHTML =
      project.process
        .map(
          (step) => `
            <article class="case-process-step">

              <span class="case-process-number">
                ${step.number}
              </span>

              <div>

                <h3>
                  ${step.title}
                </h3>

                <p>
                  ${step.description}
                </p>

              </div>

            </article>
          `
        )
        .join("");


    const linkHTML =
      createProjectLinks(project);


    caseStudy.innerHTML = `
      <div class="case-study-inner">

        <button
          type="button"
          class="case-study-close"
          aria-label="Close project"
        >
          ×
        </button>


        <div class="case-study-top">

          <button
            type="button"
            class="case-study-back"
          >
            ← BACK TO LAB
          </button>

          <span>
            EXPERIMENT ${project.number}
          </span>

        </div>


        <header class="case-study-header">

          <span class="case-study-type">
            ${project.type}
          </span>

          <h2>
            ${project.name}
          </h2>

          <p class="case-study-subtitle">
            ${project.subtitle}
          </p>

          <div class="case-study-year">
            ${project.year}
          </div>

        </header>


        <div class="case-study-hero-visual">
          ${createLargeVisual(project)}
        </div>


        <section class="case-study-overview">

          <div class="case-label">
            SYNOPSIS
          </div>

          <div class="case-overview-content">

            <p class="case-overview-lead">
              ${project.synopsis}
            </p>

            <div class="case-overview-details">

              <div>
                <span>ROLE</span>
                <strong>${project.role}</strong>
              </div>

              <div>
                <span>YEAR</span>
                <strong>${project.year}</strong>
              </div>

            </div>

          </div>

        </section>


        <section class="case-study-skills">

          <div class="case-label">
            SKILLS + TOOLS
          </div>

          <div class="case-skills-content">

            <div class="case-skill-group">

              <span>SKILLS</span>

              <div class="case-tags">

                ${project.skills
                  .map(
                    (skill) => `
                      <span>${skill}</span>
                    `
                  )
                  .join("")}

              </div>

            </div>


            <div class="case-skill-group">

              <span>TOOLS</span>

              <div class="case-tags">

                ${project.tools
                  .map(
                    (tool) => `
                      <span>${tool}</span>
                    `
                  )
                  .join("")}

              </div>

            </div>

          </div>

        </section>


        <section class="case-study-process">

          <div class="case-label">
            QUICK SUMMARY OF THE PROCESS
          </div>

          <div class="case-process-list">
            ${processHTML}
          </div>

        </section>


        ${
          linkHTML
            ? `
              <section class="case-study-links">

                <div class="case-label">
                  EXPLORE
                </div>

                <div class="case-links">
                  ${linkHTML}
                </div>

              </section>
            `
            : ""
        }


        <footer class="case-study-footer">

          <span>
            INNOVATION LAB / ${project.number}
          </span>

          <span>
            END OF EXPERIMENT
          </span>

        </footer>

      </div>
    `;


    const closeButton =
      caseStudy.querySelector(
        ".case-study-close"
      );

    const backButton =
      caseStudy.querySelector(
        ".case-study-back"
      );


    closeButton.addEventListener(
      "click",
      closeCaseStudy
    );

    backButton.addEventListener(
      "click",
      closeCaseStudy
    );


    caseStudy.addEventListener(
      "click",
      (event) => {
        if (event.target === caseStudy) {
          closeCaseStudy();
        }
      }
    );


    return caseStudy;
  }


  function closeCaseStudy() {
    const caseStudy =
      document.querySelector(
        ".project-case-study"
      );

    if (!caseStudy) {
      return;
    }

    caseStudy.classList.remove(
      "is-visible"
    );

    setTimeout(() => {
      caseStudy.remove();

      document.body.classList.remove(
        "case-study-open"
      );
    }, 250);
  }


  function createProjectLinks(project) {
    const links = [];


    if (project.links.prototype) {
      links.push(`
        <a
          href="${project.links.prototype}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>FIGMA PROTOTYPE</span>
          <span>↗</span>
        </a>
      `);
    }


    if (project.links.caseStudy) {
      links.push(`
        <a
          href="${project.links.caseStudy}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>UX CASE STUDY</span>
          <span>↗</span>
        </a>
      `);
    }


    if (project.links.live) {
      links.push(`
        <a
          href="${project.links.live}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LIVE SITE</span>
          <span>↗</span>
        </a>
      `);
    }


    if (project.links.github) {
      links.push(`
        <a
          href="${project.links.github}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GITHUB</span>
          <span>↗</span>
        </a>
      `);
    }


    return links.join("");
  }


  function createLargeVisual(project) {
    return `
      <div class="case-large-visual case-visual-${project.visual}">
        ${createLargeVisualContent(project)}
      </div>
    `;
  }


  function createLargeVisualContent(project) {
    if (project.visual === "study") {
      return `
        <div class="case-study-screen">

          <div class="case-screen-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="case-screen-body">

            <div class="case-sidebar">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="case-dashboard">

              <div class="case-dashboard-heading">
                <span></span>
                <span></span>
              </div>

              <div class="case-dashboard-cards">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div class="case-dashboard-large"></div>

              <div class="case-dashboard-bottom">
                <div></div>
                <div></div>
              </div>

            </div>

          </div>

        </div>
      `;
    }


    if (project.visual === "support") {
      return `
        <div class="case-phone-group">

          <div class="case-phone case-phone-back">
            <div class="case-phone-screen">

              <div class="case-phone-bar"></div>

              <div class="case-phone-line"></div>
              <div class="case-phone-line case-phone-line-short"></div>

              <div class="case-phone-card"></div>

            </div>
          </div>

          <div class="case-phone case-phone-front">
            <div class="case-phone-screen">

              <div class="case-phone-header">
                <span></span>
                <span></span>
              </div>

              <div class="case-phone-avatar"></div>

              <div class="case-phone-line"></div>
              <div class="case-phone-line case-phone-line-short"></div>

              <div class="case-phone-resource"></div>
              <div class="case-phone-resource"></div>

            </div>
          </div>

        </div>
      `;
    }


    if (project.visual === "health") {
      return `
        <div class="case-health-screen">

          <div class="case-health-header"></div>

          <div class="case-health-metrics">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div class="case-health-chart">

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </div>

          <div class="case-health-bottom">
            <div></div>
            <div></div>
          </div>

        </div>
      `;
    }


    return `
      <div class="case-career-screen">

        <div class="case-career-header"></div>

        <div class="case-career-profile"></div>

        <div class="case-career-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="case-career-cards">
          <div></div>
          <div></div>
          <div></div>
        </div>

      </div>
    `;
  }


  return page;
}