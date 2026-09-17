export function SectionView(location, onBack) {
  const section = document.createElement("section");

  section.classList.add("section-view");
  section.classList.add(`section-${location.id}`);

  section.innerHTML = `
    <div class="section-content">

      <button class="back-to-campus" type="button">
        ← Back to Campus
      </button>

      <span class="section-label">
        ${location.name}
      </span>

      <h1>${location.section}</h1>

      <p>
        ${location.description}
      </p>

    </div>
  `;

  const backButton =
    section.querySelector(".back-to-campus");

  backButton.addEventListener("click", () => {
    onBack();
  });

  return section;
}