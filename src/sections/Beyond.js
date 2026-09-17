export function Beyond({ location } = {}) {
  const section = document.createElement("div");

  section.classList.add("section-hero");

  section.innerHTML = `
    <span class="section-eyebrow">
      ${location?.section || "BEYOND THE SCREEN"}
    </span>

    <h1>
      ${location?.name || "UTOWN"}
    </h1>

    <p>
      ${location?.description || ""}
    </p>
  `;

  return section;
}