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

  // Align the bus door with the center of the bus stop.
  const stopPosition = () =>
    stopCenter() - busWidth + 13;

  const passengerTop = () =>
    bus.offsetTop + 25;

  bus.style.animation = "none";
  bus.style.left = "-160px";

  const passengerShirts = [
    "passenger-shirt-cream",
    "passenger-shirt-rust",
    "passenger-shirt-blue",
    "passenger-shirt-sage",
  ];

  // Passengers in this array remain visible at the stop
  // until they board a later shuttle.
  const waitingPassengers = [];

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

  async function walkPassenger(
    passenger,
    from,
    to,
    removeAtEnd = false
  ) {
    passenger.style.left = `${from}px`;
    passenger.style.top = `${passengerTop()}px`;
    passenger.classList.add("is-walking");

    const distance = Math.abs(to - from);
    const duration = reducedMotion
      ? 0
      : Math.max(350, distance * 9);

    await moveElement(passenger, from, to, duration);

    passenger.classList.remove("is-walking");

    if (removeAtEnd) {
      // Boarding passengers disappear into the shuttle.
      if (!reducedMotion) {
        const fade = passenger.animate(
          [{ opacity: 1 }, { opacity: 0 }],
          {
            duration: 220,
            fill: "forwards",
          }
        );

        await fade.finished;
      }

      passenger.remove();
    }
  }

  function seedWaitingPassengers() {
    const initialCount = 2;
    const queueX = stopCenter() - 8;

    for (let i = 0; i < initialCount; i += 1) {
      const passenger = createPassenger();

      passenger.style.left = `${queueX - i * 13}px`;
      passenger.style.top = `${passengerTop()}px`;

      waitingPassengers.push(passenger);
    }
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

    // Record who was waiting before the bus arrived.
    // Passengers getting off cannot immediately board again.
    const waitingWhenBusArrived = [...waitingPassengers];

    // 1. Passengers get off and stay at the bus stop.
    const exitingCount = Math.random() < 0.55 ? 1 : 2;

    for (let i = 0; i < exitingCount; i += 1) {
      const passenger = createPassenger();

      // Position new arrivals after the existing queue.
      const destinationX =
        queueX - waitingPassengers.length * 13;

      await walkPassenger(
        passenger,
        doorX - 5,
        destinationX
      );

      // Keep the passenger visible and waiting for a future bus.
      waitingPassengers.push(passenger);

      await wait(180);
    }

    await wait(250);

    // 2. Different passengers who were already waiting board.
    const availableToBoard = waitingWhenBusArrived.filter(
      (passenger) => waitingPassengers.includes(passenger)
    );

    const requestedBoarders = Math.random() < 0.55 ? 1 : 2;
    const boardingCount = Math.min(
      requestedBoarders,
      availableToBoard.length
    );

    for (let i = 0; i < boardingCount; i += 1) {
      const passenger = availableToBoard[i];
      const passengerIndex = waitingPassengers.indexOf(passenger);

      if (passengerIndex === -1) {
        continue;
      }

      const startX =
        parseFloat(passenger.style.left) || queueX;

      // Remove the passenger from the queue as they board.
      waitingPassengers.splice(passengerIndex, 1);

      await walkPassenger(
        passenger,
        startX,
        doorX - 4,
        true
      );

      await wait(180);
    }
  }

  async function runBusRoute() {
    while (bus.isConnected && environment.isConnected) {
      // Pause before the next shuttle arrives.
      await wait(randomBetween(2500, 5000));

      if (!bus.isConnected || !environment.isConnected) {
        break;
      }

      const startX = -160;
      const stopX = stopPosition();

      bus.classList.remove("is-doors-open");

      // Drive up to the stop.
      const arrivalDistance = Math.abs(stopX - startX);

      await moveElement(
        bus,
        startX,
        stopX,
        reducedMotion ? 0 : arrivalDistance * 5.8
      );

      if (!bus.isConnected || !environment.isConnected) {
        break;
      }

      await wait(350);
      await openDoors();

      try {
        await handlePassengers();
        await wait(500);
      } catch (error) {
        console.error("Campus passenger animation error:", error);
      } finally {
        // Always close the doors before departing.
        await closeDoors();
      }

      await wait(1500);

      if (!bus.isConnected || !environment.isConnected) {
        break;
      }

      // Drive away across the campus.
      const departureX = environmentWidth() + 160;
      const departureDistance = Math.abs(departureX - stopX);

      await moveElement(
        bus,
        stopX,
        departureX,
        reducedMotion ? 0 : departureDistance * 5.8
      );

      bus.style.left = "-160px";

      // Give the remaining passengers time to wait for the next bus.
      await wait(randomBetween(7000, 12000));
    }
  }

  // Start with a couple of students already waiting.
  seedWaitingPassengers();

  runBusRoute().catch((error) => {
    console.error("Campus bus animation error:", error);
  });
}