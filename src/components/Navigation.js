import { campus } from "../data/campus.js";

export function Navigation(
  onSelect,
  onStartTour,
  onBackToCampus
) {
  const navigation = document.createElement("nav");

  navigation.classList.add("campus-navigation");

  navigation.innerHTML = `
    <button
      class="directory-button"
      type="button"
      aria-label="Open Campus Directory"
    >
      ☰ CAMPUS DIRECTORY
    </button>

    <div class="directory-panel">
      <div class="directory-header">
        <div>
          <span class="directory-eyebrow">
            EXPLORE THE CAMPUS
          </span>

          <h2>
            Campus Directory
          </h2>
        </div>

        <button
          class="directory-close"
          type="button"
          aria-label="Close campus directory"
        >
          ×
        </button>
      </div>

      <button
        class="start-tour-button"
        type="button"
      >
        <span>✦</span>

        <span>
          <strong>
            START CAMPUS TOUR
          </strong>

          <small>
            Follow the guided journey
          </small>
        </span>

        <span>→</span>
      </button>

      <div class="directory-divider">
        DESTINATIONS
      </div>

      <div class="directory-list"></div>
    </div>
  `;

  const directoryButton =
    navigation.querySelector(".directory-button");

  const closeButton =
    navigation.querySelector(".directory-close");

  const directoryPanel =
    navigation.querySelector(".directory-panel");

  const startTourButton =
    navigation.querySelector(".start-tour-button");

  const directoryList =
    navigation.querySelector(".directory-list");

  // Track and highlight the current destination.
  function setActiveDestination(activeItem) {
    navigation
      .querySelectorAll(".directory-item")
      .forEach((item) => {
        const isActive = item === activeItem;

        item.classList.toggle(
          "directory-current",
          isActive
        );

        if (isActive) {
          item.setAttribute("aria-current", "page");
        } else {
          item.removeAttribute("aria-current");
        }
      });
  }

  startTourButton.addEventListener("click", () => {
    directoryPanel.classList.remove("is-open");

    onStartTour();
  });

  // MAIN CAMPUS — special destination 00
  const mainCampusItem =
    document.createElement("button");

  mainCampusItem.type = "button";

  mainCampusItem.classList.add(
    "directory-item",
    "directory-main-campus"
  );

  mainCampusItem.innerHTML = `
    <span class="directory-number">
      00
    </span>

    <span class="directory-icon">
      📍
    </span>

    <span class="directory-item-text">
      <strong>
        Main Campus
      </strong>

      <small>
        Campus Map
      </small>
    </span>

    <span class="directory-arrow">
      →
    </span>
  `;

  mainCampusItem.addEventListener("click", () => {
    setActiveDestination(mainCampusItem);

    directoryPanel.classList.remove("is-open");

    onBackToCampus();
  });

  directoryList.appendChild(mainCampusItem);

  // ACTUAL CAMPUS DESTINATIONS
  campus.locations.forEach((location, index) => {
    const item = document.createElement("button");

    item.type = "button";

    item.classList.add("directory-item");

    item.innerHTML = `
      <span class="directory-number">
        ${String(index + 1).padStart(2, "0")}
      </span>

      <span class="directory-icon">
        ${location.icon || "🏫"}
      </span>

      <span class="directory-item-text">
        <strong>
          ${location.name}
        </strong>

        <small>
          ${location.section}
        </small>
      </span>

      <span class="directory-arrow">
        →
      </span>
    `;

    item.addEventListener("click", () => {
      setActiveDestination(item);

      onSelect(location);

      directoryPanel.classList.remove("is-open");
    });

    directoryList.appendChild(item);
  });

  directoryButton.addEventListener("click", () => {
    directoryPanel.classList.add("is-open");
  });

  closeButton.addEventListener("click", () => {
    directoryPanel.classList.remove("is-open");
  });

  // Start with Main Campus highlighted.
  setActiveDestination(mainCampusItem);

  // Expose this method so the parent app can update
  // the highlight when a building is entered another way.
  navigation.setActiveDestination = (location) => {
    if (!location) {
      setActiveDestination(mainCampusItem);
      return;
    }

    const matchingItem = [
      ...navigation.querySelectorAll(
        ".directory-item:not(.directory-main-campus)"
      ),
    ].find((item) => {
      const name = item.querySelector(
        ".directory-item-text strong"
      );

      return name?.textContent.trim() === location.name;
    });

    if (matchingItem) {
      setActiveDestination(matchingItem);
    }
  };

  return navigation;
}