export function Projects({ location } = {}) {
  const section = document.createElement("div");

  section.classList.add("section-hero");

  section.innerHTML = `
    <span class="section-eyebrow">
      ${location?.section || "PROJECTS"}
    </span>

    <h1>
      ${location?.name || "INNOVATION LAB"}
    </h1>

    <p>
      ${location?.description || ""}
    </p>
  `;

  return section;
}