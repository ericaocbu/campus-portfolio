export function Contact({ location } = {}) {
  const section = document.createElement("div");

  section.classList.add("section-hero");

  section.innerHTML = `
    <span class="section-eyebrow">
      ${location?.section || "CONTACT"}
    </span>

    <h1>
      ${location?.name || "FOOD CANTEEN"}
    </h1>

    <p>
      ${location?.description || ""}
    </p>
  `;

  return section;
}