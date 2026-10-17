import { campus } from "../data/campus.js";

export function Navigation(onSelect, onStartTour, onBackToCampus) {
  const navigation = document.createElement("nav");

  navigation.classList.add("campus-navigation");

  navigation.innerHTML = `
    <button
      class="directory-button"
      type="button"
      aria-label="Open Campus Directory"
      aria-expanded="false"
    >
      ☰ CAMPUS DIRECTORY
    </button>

    <div class="directory-panel">
      <div class="directory-header">
        <div>
          <span class="directory-eyebrow">
            EXPLORE THE CAMPUS
          </span>

          <h2>Campus Directory</h2>
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
        <span class="tour-button-icon">✦</span>

        <span class="tour-button-text">
          <strong>START CAMPUS TOUR</strong>
          <small>Follow the guided journey</small>
        </span>

        <span class="tour-button-arrow">→</span>
      </button>

      <div class="directory-divider">
        DESTINATIONS
      </div>

      <div class="directory-list"></div>
    </div>
  `;

  const directoryButton = navigation.querySelector(".directory-button");

  const closeButton = navigation.querySelector(".directory-close");

  const directoryPanel = navigation.querySelector(".directory-panel");

  const startTourButton = navigation.querySelector(".start-tour-button");

  const tourButtonTitle = navigation.querySelector(".tour-button-text strong");

  const tourButtonDescription = navigation.querySelector(
    ".tour-button-text small",
  );

  const tourButtonArrow = navigation.querySelector(".tour-button-arrow");

  const directoryList = navigation.querySelector(".directory-list");

  let tourStatus = "not-started";

  /*
   * Open and close the directory through one shared method.
   */
  function closeDirectory() {
    directoryPanel.classList.remove("is-open");
    directoryButton.setAttribute("aria-expanded", "false");
  }

  function openDirectory() {
    directoryPanel.classList.add("is-open");
    directoryButton.setAttribute("aria-expanded", "true");
  }

  navigation.closeDirectory = closeDirectory;
  navigation.openDirectory = openDirectory;

  /*
   * Update the tour button based on tour status.
   */
  navigation.setTourButtonState = (status) => {
    tourStatus = status;

    if (tourStatus === "active") {
      tourButtonTitle.textContent = "TOUR IN PROGRESS";
      tourButtonDescription.textContent = "Continue your guided journey";
      tourButtonArrow.textContent = "→";

      startTourButton.setAttribute(
        "aria-label",
        "Continue the current campus tour",
      );
    } else if (tourStatus === "completed") {
      tourButtonTitle.textContent = "TAKE THE TOUR AGAIN";
      tourButtonDescription.textContent = "Revisit the campus with Erica";
      tourButtonArrow.textContent = "↻";

      startTourButton.setAttribute("aria-label", "Take the campus tour again");
    } else {
      tourButtonTitle.textContent = "START CAMPUS TOUR";
      tourButtonDescription.textContent = "Follow the guided journey";
      tourButtonArrow.textContent = "→";

      startTourButton.setAttribute("aria-label", "Start the campus tour");
    }
  };

  /*
   * Track and highlight the current destination.
   */
  function setActiveDestination(activeItem) {
    navigation.querySelectorAll(".directory-item").forEach((item) => {
      const isActive = item === activeItem;

      item.classList.toggle("directory-current", isActive);

      if (isActive) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }

  /*
   * Tour button:
   * - Close the directory.
   * - If a tour is already active, do not restart it.
   * - Otherwise, start or replay the tour.
   */
  startTourButton.addEventListener("click", () => {
    closeDirectory();

    if (tourStatus === "active") {
      return;
    }

    onStartTour();
  });

  /*
   * MAIN CAMPUS — special destination 00.
   */
  const mainCampusItem = document.createElement("button");

  mainCampusItem.type = "button";

  mainCampusItem.classList.add("directory-item", "directory-main-campus");

  mainCampusItem.innerHTML = `
    <span class="directory-number">00</span>

    <span class="directory-icon">📍</span>

    <span class="directory-item-text">
      <strong>Main Campus</strong>
      <small>Campus Map</small>
    </span>

    <span class="directory-arrow">→</span>
  `;

  mainCampusItem.addEventListener("click", () => {
    setActiveDestination(mainCampusItem);
    closeDirectory();
    onBackToCampus();
  });

  directoryList.appendChild(mainCampusItem);

  /*
   * ACTUAL CAMPUS DESTINATIONS.
   */
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
        <strong>${location.name}</strong>
        <small>${location.section}</small>
      </span>

      <span class="directory-arrow">→</span>
    `;

    item.addEventListener("click", () => {
      setActiveDestination(item);
      closeDirectory();
      onSelect(location);
    });

    directoryList.appendChild(item);
  });

  /*
   * Directory toggle.
   */
  directoryButton.addEventListener("click", () => {
    if (directoryPanel.classList.contains("is-open")) {
      closeDirectory();
    } else {
      openDirectory();
    }
  });

  /*
   * Close button.
   */
  closeButton.addEventListener("click", closeDirectory);

  /*
   * Close the directory when clicking outside its panel
   * and outside the directory toggle button.
   */
  document.addEventListener("click", (event) => {
    if (!directoryPanel.classList.contains("is-open")) {
      return;
    }

    const clickedInsidePanel = directoryPanel.contains(event.target);

    const clickedToggle = directoryButton.contains(event.target);

    if (!clickedInsidePanel && !clickedToggle) {
      closeDirectory();
    }
  });

  /*
   * Escape key also closes the directory.
   */
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      directoryPanel.classList.contains("is-open")
    ) {
      closeDirectory();
      directoryButton.focus();
    }
  });

  /*
   * Synchronize the highlighted destination with the campus scene.
   */
  navigation.setActiveDestination = (location) => {
    if (!location) {
      setActiveDestination(mainCampusItem);
      return;
    }

    const matchingItem = [
      ...navigation.querySelectorAll(
        ".directory-item:not(.directory-main-campus)",
      ),
    ].find((item) => {
      const name = item.querySelector(".directory-item-text strong");

      return name?.textContent.trim() === location.name;
    });

    if (matchingItem) {
      setActiveDestination(matchingItem);
    }
  };

  setActiveDestination(mainCampusItem);
  navigation.setTourButtonState("not-started");

  return navigation;
}