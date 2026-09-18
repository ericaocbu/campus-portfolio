export function ProjectCard(project, onSelect, options = {}) {
  const card = document.createElement("article");

  const featured = options.featured === true;

  card.className = [
    "studio-project-card",
    `studio-project-${project.accent}`,
    featured ? "studio-project-featured" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const skills = project.skills
    .slice(0, featured ? 6 : 4)
    .map(
      (skill) => `
        <span class="studio-skill">
          ${skill}
        </span>
      `
    )
    .join("");

  card.innerHTML = `
    <div class="studio-project-number">
      ${project.number}
    </div>

    <div class="studio-project-visual">
      ${createProjectVisual(project)}
    </div>

    <div class="studio-project-info">

      <div class="studio-project-meta">
        <span>${project.type}</span>
        <span>${project.year}</span>
      </div>

      <h3>
        ${project.name}
      </h3>

      <p class="studio-project-subtitle">
        ${project.subtitle}
      </p>

      <p class="studio-project-synopsis">
        ${project.synopsis}
      </p>

      <div class="studio-project-skills">
        ${skills}
      </div>

      <button
        type="button"
        class="studio-project-button"
      >
        <span>VIEW PROJECT</span>
        <span>↗</span>
      </button>

    </div>
  `;

  card.addEventListener("click", () => {
    onSelect(project);
  });

  const button = card.querySelector(
    ".studio-project-button"
  );

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    onSelect(project);
  });

  return card;
}


function createProjectVisual(project) {
  if (project.visual === "study") {
    return `
      <div class="visual-study">

        <div class="study-window">

          <div class="mock-window-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="study-window-content">

            <div class="mock-sidebar">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="mock-dashboard">

              <div class="mock-title"></div>

              <div class="mock-progress-row">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div class="mock-large-card"></div>

              <div class="mock-small-row">
                <div></div>
                <div></div>
              </div>

            </div>

          </div>

        </div>

        <div class="visual-label">
          STUDY / ORGANIZE / GROW
        </div>

      </div>
    `;
  }

  if (project.visual === "support") {
    return `
      <div class="visual-support">

        <div class="phone phone-back">
          <div class="phone-screen">
            <div class="phone-bar"></div>
            <div class="phone-line"></div>
            <div class="phone-line short"></div>
            <div class="phone-card"></div>
          </div>
        </div>

        <div class="phone phone-front">

          <div class="phone-screen">

            <div class="phone-header">
              <span></span>
              <span></span>
            </div>

            <div class="phone-avatar"></div>

            <div class="phone-line"></div>
            <div class="phone-line short"></div>

            <div class="phone-resource"></div>
            <div class="phone-resource"></div>

          </div>

        </div>

      </div>
    `;
  }

  if (project.visual === "health") {
    return `
      <div class="visual-health">

        <div class="health-dashboard">

          <div class="health-header">
            <span></span>
            <span></span>
          </div>

          <div class="health-metrics">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div class="health-chart">

            <div class="chart-line"></div>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </div>

          <div class="health-bottom">
            <div></div>
            <div></div>
          </div>

        </div>

        <div class="visual-label">
          TRACK / UNDERSTAND / MANAGE
        </div>

      </div>
    `;
  }

  return `
    <div class="visual-career">

      <div class="career-window">

        <div class="career-top">
          <span></span>
          <span></span>
        </div>

        <div class="career-content">

          <div class="career-profile"></div>

          <div class="career-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="career-cards">
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>

      </div>

      <div class="visual-label">
        EXPLORE / CONNECT / APPLY
      </div>

    </div>
  `;
}