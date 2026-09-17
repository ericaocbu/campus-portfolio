export function Experience({ location } = {}) {
  const section = document.createElement("div");

  section.classList.add("section-hero");

  section.innerHTML = `
    <span class="section-eyebrow">
      ${location?.section || "EXPERIENCE"}
    </span>

    <h1>
      ${location?.name || "LECTURE HALL"}
    </h1>

    <p>
      ${location?.description || ""}
    </p>
  `;

  return section;
}