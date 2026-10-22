export function initCampusBus(environment, bus, busStop) {
  if (!environment || !bus || !busStop) {
    return;
  }

  const wait = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const randomBetween = (min, max) =>
    Math.random() * (max - min) + min;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const busWidth = bus.offsetWidth || 125;
  const environmentWidth = () => environment.clientWidth || 1800;

  const stopCenter = () =>
    busStop.offsetLeft + busStop.offsetWidth / 2;

  const stopPosition = () =>
    stopCenter() - busWidth + 13;

  const passengerTop = () =>
    bus.offsetTop + 14;

  bus.style.animation = "none";
  bus.style.left = "-160px";

  const passengerShirts = [
    "passenger-shirt-cream",
    "passenger-shirt-rust",
    "passenger-shirt-blue",
    "passenger-shirt-sage",
  ];


    function createPassenger() {
    const passenger = document.createElement("div");

    const shirt =
        passengerShirts[
        Math.floor(Math.random() * passengerShirts.length)
        ];

    passenger.className = "bus-passenger";
    passenger.classList.add(shirt);
    passenger.setAttribute("aria-hidden", "true");

    passenger.innerHTML = `
        <span class="passenger-shadow"></span>
        <span class="passenger-hair"></span>
        <span class="passenger-head"></span>
        <span class="passenger-body"></span>
        <span class="passenger-arm passenger-arm-left"></span>
        <span class="passenger-arm passenger-arm-right"></span>
        <span class="passenger-leg passenger-leg-left"></span>
        <span class="passenger-leg passenger-leg-right"></span>
    `;

    environment.appendChild(passenger);

    return passenger;
    }


  async function moveElement(element, from, to, duration) {
    element.style.left = `${from}px`;

    if (reducedMotion || duration <= 0) {
      element.style.left = `${to}px`;
      return;
    }

    const animation = element.animate(
      [
        { left: `${from}px` },
        { left: `${to}px` },
      ],
      {
        duration,
        easing: "linear",
        fill: "forwards",
      }
    );

    await animation.finished;

    element.style.left = `${to}px`;
    animation.cancel();
  }

  async function walkPassenger(from, to, fadeAtEnd = false) {
    const passenger = createPassenger();

    passenger.style.left = `${from}px`;
    passenger.style.top = `${passengerTop()}px`;
    passenger.classList.add("is-walking");

    const distance = Math.abs(to - from);
    const duration = reducedMotion
      ? 0
      : Math.max(350, distance * 9);

    await moveElement(passenger, from, to, duration);

    passenger.classList.remove("is-walking");

    if (fadeAtEnd) {
      if (!reducedMotion) {
        const fade = passenger.animate(
          [{ opacity: 1 }, { opacity: 0 }],
          { duration: 220, fill: "forwards" }
        );

        await fade.finished;
      }

      passenger.remove();
      return;
    }

    // Give people who exit time to walk away from the bus stop.
    await wait(2800);
    passenger.remove();
  }

  async function openDoors() {
    bus.classList.add("is-doors-open");
    await wait(reducedMotion ? 50 : 400);
  }

  async function closeDoors() {
    bus.classList.remove("is-doors-open");
    await wait(reducedMotion ? 50 : 400);
  }

  async function handlePassengers() {
    const doorX = stopPosition() + busWidth - 13;
    const queueX = stopCenter() - 8;

    // Let exiting passengers leave first.
    const exitingCount = Math.random() < 0.55 ? 1 : 2;

    for (let i = 0; i < exitingCount; i += 1) {
      const exitX = doorX - 5;
      const destinationX = stopCenter() - 25 - i * 13;

      await walkPassenger(exitX, destinationX);
      await wait(180);
    }

    await wait(250);

    // Students waiting at the stop board the shuttle.
    const boardingCount = Math.random() < 0.55 ? 1 : 2;

    for (let i = 0; i < boardingCount; i += 1) {
      const startX = queueX - i * 13;

      await walkPassenger(startX, doorX - 4, true);
      await wait(180);
    }
  }

  async function runBusRoute() {
    while (bus.isConnected && environment.isConnected) {
      // Give the shuttle a little downtime between visits.
      await wait(randomBetween(2500, 5000));

      if (!bus.isConnected) break;

      const startX = -160;
      const stopX = stopPosition();

      bus.classList.remove("is-doors-open");

      // Drive in and brake at the bus stop.
      const arrivalDistance = Math.abs(stopX - startX);
      await moveElement(
        bus,
        startX,
        stopX,
        reducedMotion ? 0 : arrivalDistance * 5.8
      );

      if (!bus.isConnected) break;

      await wait(350);
      await openDoors();

      try {
        await handlePassengers();
        await wait(500);
      } catch (error) {
        console.error("Campus passenger animation error:", error);
      } finally {
        await closeDoors();
      }

      // Brief pause before pulling away.
      await wait(1500);

      const departureX = environmentWidth() + 160;
      const departureDistance = Math.abs(departureX - stopX);

      await moveElement(
        bus,
        stopX,
        departureX,
        reducedMotion ? 0 : departureDistance * 5.8
      );

      bus.style.left = "-160px";

      // Longer gap before the next shuttle arrives.
      await wait(randomBetween(7000, 12000));
    }
  }

  runBusRoute().catch((error) => {
    console.error("Campus bus animation error:", error);
  });
}