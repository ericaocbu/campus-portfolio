export function Building(location, onSelect) {
  const building = document.createElement("button");

  building.type = "button";

  building.classList.add("building");
  building.classList.add(`building-${location.id}`);

  building.dataset.id = location.id;

  building.innerHTML = `
    <span class="building-shadow"></span>

    <span class="building-structure">

      <span class="building-roof">
        <span class="roof-detail"></span>
      </span>

      <span class="building-facade">

        <span class="building-windows">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <span class="building-entrance">
          <span class="entrance-frame">
            <span class="entrance-door"></span>
          </span>
        </span>

      </span>

      <span class="building-foundation"></span>

    </span>

    <span class="building-sign">
      <span class="building-icon">
        ${location.icon || "🏫"}
      </span>

      <span class="building-label">
        <strong>${location.name}</strong>
        <small>${location.section}</small>
      </span>
    </span>

    <span class="building-arrow">
      ENTER →
    </span>
  `;

  building.addEventListener("click", () => {
    onSelect();
  });

  return building;
}