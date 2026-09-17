import { campus } from "../data/campus.js";

export function Navigation(
  onSelect,
  onStartTour
) {
  const navigation =
    document.createElement("nav");

  navigation.classList.add(
    "campus-navigation"
  );

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
    navigation.querySelector(
      ".directory-button"
    );

  const closeButton =
    navigation.querySelector(
      ".directory-close"
    );

  const directoryPanel =
    navigation.querySelector(
      ".directory-panel"
    );

  const startTourButton =
    navigation.querySelector(
      ".start-tour-button"
    );

  const directoryList =
    navigation.querySelector(
      ".directory-list"
    );

  startTourButton.addEventListener(
    "click",
    () => {
      directoryPanel.classList.remove(
        "is-open"
      );

      onStartTour();
    }
  );

  campus.locations.forEach(
    (location, index) => {
      const item =
        document.createElement("button");

      item.type = "button";

      item.classList.add(
        "directory-item"
      );

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

      item.addEventListener(
        "click",
        () => {
          onSelect(location);

          directoryPanel.classList.remove(
            "is-open"
          );
        }
      );

      directoryList.appendChild(
        item
      );
    }
  );

  directoryButton.addEventListener(
    "click",
    () => {
      directoryPanel.classList.add(
        "is-open"
      );
    }
  );

  closeButton.addEventListener(
    "click",
    () => {
      directoryPanel.classList.remove(
        "is-open"
      );
    }
  );

  return navigation;
}