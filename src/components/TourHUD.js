export function TourHUD({
  currentIndex,
  totalStops,
  currentLocation,
  nextLocation,
  onNext,
  onExit,
}) {
  const hud =
    document.createElement("aside");

  hud.classList.add("tour-hud");

  const stopNumber =
    String(
      currentIndex + 1
    ).padStart(2, "0");

  const totalNumber =
    String(totalStops)
      .padStart(2, "0");

  const isLastStop =
    !nextLocation;

  hud.innerHTML = `
    <div class="tour-hud-top">

      <span class="tour-hud-label">
        <span class="tour-hud-dot"></span>
        CAMPUS TOUR
      </span>

      <span class="tour-hud-count">
        ${stopNumber} / ${totalNumber}
      </span>

    </div>

    <div class="tour-hud-current">

      <span class="tour-hud-eyebrow">
        YOU ARE HERE
      </span>

      <strong>
        ${currentLocation.name}
      </strong>

      <small>
        ${currentLocation.section}
      </small>

    </div>

    ${
      nextLocation
        ? `
          <div class="tour-hud-next">

            <span class="tour-hud-eyebrow">
              UP NEXT
            </span>

            <strong>
              ${nextLocation.name}
            </strong>

            <small>
              ${nextLocation.section}
            </small>

          </div>
        `
        : `
          <div class="tour-hud-next">

            <span class="tour-hud-eyebrow">
              FINAL STOP
            </span>

            <strong>
              YOU'VE REACHED THE END
            </strong>

            <small>
              Thanks for exploring my campus.
            </small>

          </div>
        `
    }

    <div class="tour-hud-actions">

      <button
        class="tour-hud-next-button"
        type="button"
      >
        <span>
          ${
            isLastStop
              ? "FINISH TOUR"
              : `NEXT: ${nextLocation.name}`
          }
        </span>

        <span>→</span>
      </button>

      <button
        class="tour-hud-exit"
        type="button"
      >
        EXIT TOUR
      </button>

    </div>
  `;

  const nextButton =
    hud.querySelector(
      ".tour-hud-next-button"
    );

  const exitButton =
    hud.querySelector(
      ".tour-hud-exit"
    );

  nextButton.addEventListener(
    "click",
    onNext
  );

  exitButton.addEventListener(
    "click",
    onExit
  );

  return hud;
}