import { projects } from "../data/projects.js";
import { ProjectCard } from "../components/ProjectCard.js";

export function Projects() {
  const page = document.createElement("div");
  page.className = "innovation-lab-page";

  const featuredProject = projects.find((project) => project.featured);
  const archiveProjects = projects.filter((project) => !project.featured);

  page.innerHTML = `
    <div class="lab-blueprint" aria-hidden="true"></div>

    <header class="lab-hero">
      <div class="lab-hero-top">
        <div class="lab-location">INNOVATION LAB</div>
        <span class="lab-hero-index">FIELD NOTES / 2026</span>
      </div>

      <div class="lab-hero-grid">
        <div class="lab-hero-title">
          <span class="lab-eyebrow">DESIGN + DEVELOPMENT STUDIO</span>
          <h1>THE<br />BLUEPRINTS<br />INTO <em>MY PROJECTS.</em></h1>
        </div>

        <div class="lab-hero-copy">
          <p>Research, interaction, and front-end development meet in the projects I design and build!</p>
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

    <section class="lab-featured">
      <div class="lab-section-heading">
        <div>
          <span class="lab-section-number">01</span>
          <span>FEATURED EXPERIMENT</span>
        </div>
        <span>CURRENT WORK</span>
      </div>
      <div class="featured-project-slot"></div>
    </section>

    <section class="lab-archive">
      <div class="lab-section-heading">
        <div>
          <span class="lab-section-number">02</span>
          <span>STUDIO ARCHIVE</span>
        </div>
        <span>SELECTED WORK</span>
      </div>
      <div class="studio-project-grid"></div>
    </section>

    <section class="lab-notes">
      <div class="lab-section-heading">
        <div>
          <span class="lab-section-number">03</span>
          <span>LAB NOTES</span>
        </div>
        <span>HOW I THINK</span>
      </div>

      <div class="lab-notes-grid">
        <article class="lab-note">
          <span>01</span>
          <h3>DESIGN IS <em>ITERATIVE.</em></h3>
          <p>My first idea is <i>rarely</i> my final one. (This portfolio for example...) Research, testing, and reflection help me continuously refine an experience.</p>
        </article>

        <article class="lab-note">
          <span>02</span>
          <h3>PEOPLE BEFORE <em>FEATURES.</em></h3>
          <p>I focus on the problem behind the interface, not just the interface itself.</p>
        </article>

        <article class="lab-note">
          <span>03</span>
          <h3>DESIGN <em>→ BUILD.</em></h3>
          <p>I like taking ideas beyond the prototype and seeing how they work as real interfaces.</p>
        </article>
      </div>
    </section>

    <section class="lab-current">
      <div class="lab-section-heading">
        <div>
          <span class="lab-section-number">04</span>
          <span>CURRENTLY IN THE LAB</span>
        </div>
        <span>IN DEVELOPMENT</span>
      </div>

      <div class="lab-current-grid">
        <article class="current-project">
          <div class="current-project-top">
            <span>05</span>
            <span>IN DEVELOPMENT</span>
          </div>
          <div class="current-project-content">
            <div>
              <span class="current-project-label">UI DESIGN / REACT / API INTEGRATION</span>
              <h3>ANIME<br /><em>TRACKER.</em></h3>
              <p>A personal anime discovery and tracking platform for exploring series, managing watch progress, and keeping up with seasonal releases.</p>
            </div>
            <span class="current-project-arrow">05 →</span>
          </div>
        </article>

        <article class="current-project current-project-alt">
          <div class="current-project-top">
            <span>06</span>
            <span>IN DEVELOPMENT</span>
          </div>
          <div class="current-project-content">
            <div>
              <span class="current-project-label">UX RESEARCH / DECISION SUPPORT / PROTOTYPING</span>
              <h3>BUY OR<br /><em>BYE?</em></h3>
              <p>A decision-making experience designed to help shoppers compare options, think through priorities, and feel more confident about what to buy.</p>
            </div>
            <span class="current-project-arrow">06 →</span>
          </div>
        </article>
      </div>
    </section>

    <footer class="lab-footer">
      <div>INNOVATION LAB</div>
      <p>More experiments are always in development :)</p>
      <span>END OF ARCHIVE</span>
    </footer>
  `;

  const featuredSlot = page.querySelector(".featured-project-slot");
  const archiveGrid = page.querySelector(".studio-project-grid");

  if (featuredProject) {
    featuredSlot.appendChild(
      ProjectCard(featuredProject, openProject, { featured: true }),
    );
  }

  archiveProjects.forEach((project) => {
    archiveGrid.appendChild(ProjectCard(project, openProject));
  });

  let activeCaseStudy = null;
  let previouslyFocusedElement = null;

  function openProject(project) {
    if (activeCaseStudy) {
      closeCaseStudy(true);
    }

    previouslyFocusedElement = document.activeElement;
    activeCaseStudy = createCaseStudy(project);

    document.body.appendChild(activeCaseStudy);
    document.body.classList.add("case-study-open");

    requestAnimationFrame(() => {
      if (!activeCaseStudy) return;

      activeCaseStudy.classList.add("is-visible");
      activeCaseStudy.querySelector(".case-study-close")?.focus();
    });
  }

  function createCaseStudy(project) {
    const overlay = document.createElement("div");

    const projectImages = {
      "with-you": `${window.location.pathname.includes("/campus-portfolio")
        ? "/campus-portfolio"
        : ""}/projects/with-you-preview.png`,

      prep4class: `${window.location.pathname.includes("/campus-portfolio")
        ? "/campus-portfolio"
        : ""}/projects/prep4class-preview.png`,

      symptomsync: `${window.location.pathname.includes("/campus-portfolio")
        ? "/campus-portfolio"
        : ""}/projects/symptomsync-preview.png`,

      incompass: `${window.location.pathname.includes("/campus-portfolio")
        ? "/campus-portfolio"
        : ""}/projects/incompass-preview.png`,
    };

    const projectImage = projectImages[project.id];

    overlay.className = `project-case-study case-study-${project.accent || "blue"}`;
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", `${project.name} project details`);

    const processHTML = (project.process || [])
      .map(
        (step) => `
          <article class="case-process-step">
            <span class="case-process-number">${escapeHTML(step.number)}</span>
            <div class="case-process-copy">
              <h3>${escapeHTML(step.title)}</h3>
              <p>${formatDescription(step.description)}</p>
            </div>
          </article>
        `,
      )
      .join("");

    const skillsHTML = (project.skills || [])
      .map((skill) => `<span class="case-tag">${escapeHTML(skill)}</span>`)
      .join("");

    const toolsHTML = (project.tools || [])
      .map(
        (tool, index) => `
          <div class="case-tool-item">
            <span class="case-tool-number">${String(index + 1).padStart(2, "0")}</span>
            <span>${escapeHTML(tool)}</span>
          </div>
        `,
      )
      .join("");

    const linksHTML = createProjectLinks(project);

    overlay.innerHTML = `
      <div class="case-study-inner">
        <div class="case-study-top">
          <button type="button" class="case-study-back">← BACK TO LAB</button>
          <span>PROJECT FILE / ${escapeHTML(project.number)}</span>
        </div>

        <button
          type="button"
          class="case-study-close"
          aria-label="Close project details"
        >×</button>

        <header class="case-study-header">
          <div class="case-study-heading-copy">
            <span class="case-study-type">${escapeHTML(project.type)}</span>
            <h2>${escapeHTML(project.name)}</h2>
            <p class="case-study-subtitle">${escapeHTML(project.subtitle)}</p>
          </div>

          <div class="case-study-index">
            <span>EXPERIMENT</span>
            <strong>${escapeHTML(project.number)}</strong>
            <span>${escapeHTML(project.year)}</span>
          </div>
        </header>

        <section
          class="case-study-cover"
          aria-label="${escapeAttribute(project.name)} project preview"
        >
          <div class="case-cover-grid" aria-hidden="true"></div>

          <div class="case-cover-corner case-cover-corner-tl">
            FIG. ${escapeHTML(project.number)}.1
          </div>

          <div class="case-cover-placeholder">
            <span class="case-placeholder-icon" aria-hidden="true">＋</span>
          </div>

          ${
            projectImage
              ? `<img
                  class="case-project-image"
                  src="${escapeAttribute(projectImage)}"
                  alt="${escapeAttribute(project.name)} project screenshot"
                />`
              : ""
          }

          <div class="case-cover-corner case-cover-corner-br">
            VISUAL DOCUMENTATION
          </div>
        </section>

        <section class="case-study-overview">
          <div class="case-section-heading">
            <span>01 / OVERVIEW</span>
            <span>THE PROJECT</span>
          </div>

          <div class="case-overview-grid">
            <div class="case-overview-main">
              <span class="case-kicker">THE BRIEF</span>
              <p class="case-overview-lead">${escapeHTML(project.synopsis)}</p>
            </div>

            <div class="case-overview-meta">
              <div>
                <span>MY ROLE</span>
                <strong>${escapeHTML(project.role)}</strong>
              </div>
              <div>
                <span>YEAR</span>
                <strong>${escapeHTML(project.year)}</strong>
              </div>
              <div>
                <span>PROJECT TYPE</span>
                <strong>${escapeHTML(project.type)}</strong>
              </div>
            </div>
          </div>
        </section>

        <section class="case-study-process">
          <div class="case-section-heading">
            <span>02 / PROCESS</span>
            <span>HOW IT CAME TOGETHER</span>
          </div>

          <div class="case-process-list">${processHTML}</div>
        </section>

        <section class="case-study-capabilities">
          <div class="case-section-heading">
            <span>03 / TOOLKIT</span>
            <span>SKILLS + TOOLS</span>
          </div>

          <div class="case-toolkit-grid">
            <div class="case-toolkit-group">
              <div class="case-toolkit-heading">
                <span class="case-toolkit-icon">✳</span>
                <div>
                  <span class="case-kicker">01 / SKILLS</span>
                  <h3>What I brought to the project</h3>
                </div>
              </div>

              <div class="case-tags">
                ${skillsHTML}
              </div>
            </div>

            <div class="case-toolkit-group case-toolkit-tools">
              <div class="case-toolkit-heading">
                <span class="case-toolkit-icon">⌘</span>
                <div>
                  <span class="case-kicker">02 / WORKING TOOLS</span>
                  <h3>What I used to make it happen</h3>
                </div>
              </div>

              <div class="case-tool-list">
                ${toolsHTML}
              </div>
            </div>
          </div>
        </section>

        ${
          linksHTML
            ? `
              <section class="case-study-links">
                <div class="case-section-heading">
                  <span>04 / TAKE A CLOSER LOOK</span>
                  <span>EXPLORE THE WORK</span>
                </div>

                <p class="case-links-intro">
                  Want to see more? Take a look at the project resources below.
                </p>

                <div class="case-links">${linksHTML}</div>
              </section>
            `
            : ""
        }

        <footer class="case-study-footer">
          <span>INNOVATION LAB / ${escapeHTML(project.number)}</span>
          <button type="button" class="case-study-footer-back">
            BACK TO PROJECTS ↑
          </button>
        </footer>
      </div>
    `;

    overlay
      .querySelectorAll(
        ".case-study-close, .case-study-back, .case-study-footer-back",
      )
      .forEach((button) => {
        button.addEventListener("click", () => closeCaseStudy());
      });

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeCaseStudy();
      }
    });

    overlay.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeCaseStudy();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = [
        ...overlay.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((element) => element.offsetParent !== null);

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    return overlay;
  }

  function closeCaseStudy(immediate = false) {
    const closing = activeCaseStudy;

    if (!closing) return;

    activeCaseStudy = null;
    closing.classList.remove("is-visible");

    const removeOverlay = () => {
      closing.remove();

      if (!document.querySelector(".project-case-study")) {
        document.body.classList.remove("case-study-open");
      }

      if (previouslyFocusedElement?.isConnected) {
        previouslyFocusedElement.focus();
      }

      previouslyFocusedElement = null;
    };

    if (immediate) {
      removeOverlay();
    } else {
      window.setTimeout(removeOverlay, 260);
    }
  }

  function createProjectLinks(project) {
    const links = [
      {
        key: "prototype",
        label: "Figma Prototype",
        description: "Explore the interactive design",
        icon: "FIG",
      },
      {
        key: "caseStudy",
        label: "UX Case Study",
        description: "Read about the process and decisions",
        icon: "DOC",
      },
      {
        key: "live",
        label: "Live Website",
        description: "Try the project for yourself",
        icon: "WEB",
      },
      {
        key: "github",
        label: "GitHub Repository",
        description: "Explore the source code",
        icon: "DEV",
      },
    ];

    return links
      .filter(({ key }) => project.links?.[key])
      .map(
        ({ key, label, description, icon }) => `
          <a
            class="case-link-card"
            href="${escapeAttribute(project.links[key])}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="case-link-icon">${icon}</span>

            <span class="case-link-copy">
              <strong>${label}</strong>
              <span>${description}</span>
            </span>

            <span class="case-link-arrow" aria-hidden="true">↗</span>
          </a>
        `,
      )
      .join("");
  }

  function formatDescription(value = "") {
    return escapeHTML(value).replace(/&lt;br\s*\/?&gt;|\n/gi, "<br>");
  }

  function escapeHTML(value = "") {
    return String(value).replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[character],
    );
  }

  function escapeAttribute(value = "") {
    return escapeHTML(value);
  }

  return page;
}