export function TourControls({
  currentIndex,
  totalStops,
  currentLocation,
  onNext,
  onStop,
}) {
  const controls = document.createElement("div");

  controls.classList.add(
    "tour-controls"
  );

  controls.innerHTML = `
    <div class="tour-progress">

      <div class="tour-progress-top">

        <span>
          CAMPUS TOUR
        </span>

        <button
          class="tour-stop"
          type="button"
        >
          EXIT TOUR
        </button>

      </div>

      <div class="tour-progress-bar">
        <span></span>
      </div>

      <div class="tour-stop-count">
        STOP ${String(currentIndex + 1).padStart(2, "0")}
        / ${String(totalStops).padStart(2, "0")}
      </div>

    </div>

    <div class="tour-next">

      <div class="tour-next-text">

        <span>
          NEXT STOP
        </span>

        <strong>
          ${currentLocation.name}
        </strong>

        <small>
          ${currentLocation.section}
        </small>

      </div>

      <button
        class="tour-next-button"
        type="button"
      >
        CONTINUE
        <span>→</span>
      </button>

    </div>
  `;


  const progressBar =
    controls.querySelector(
      ".tour-progress-bar span"
    );

  const nextButton =
    controls.querySelector(
      ".tour-next-button"
    );

  const stopButton =
    controls.querySelector(
      ".tour-stop"
    );


  const progress =
    ((currentIndex + 1) / totalStops) * 100;

  progressBar.style.width =
    `${progress}%`;


  nextButton.addEventListener(
    "click",
    onNext
  );


  stopButton.addEventListener(
    "click",
    onStop
  );


  return controls;
}