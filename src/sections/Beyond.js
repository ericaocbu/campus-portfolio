export function Beyond({ onBack }) {
  const section = document.createElement("div");
  section.classList.add("dorm-portfolio", "residence-hall");
  const instagramUrl = "https://www.instagram.com/ericasdigitalcampus";

  section.innerHTML = `
    <div class="hall-page">
      <header class="hall-topbar">
        <div class="hall-location"><span class="hall-location-dot"></span> CAMPUS LIFE <span>/</span> RESIDENCE HALL</div>
        <span class="hall-floor-label">2ND FLOOR · 204</span>
      </header>

      <main class="hall-scene" aria-label="Explore my residence hall">
        <div class="hall-ceiling" aria-hidden="true"><span></span></div>
        <section class="hall-back-wall">
          <div class="hall-sign" aria-hidden="true">
            <small>WELCOME TO</small>
            <strong>The Dorm</strong>
            <span>a hallway of information!</span>
          </div>

          <div class="hall-decor-row" aria-label="Explore wall displays">
            <button type="button" class="hall-community-board hall-object" data-panel="goals" aria-label="Open my current goals">
              <span class="board-heading">COMMUNITY BOARD</span>
              <span class="board-notes">
                <span class="board-note board-note-yellow">try something<br>new!</span>
                <span class="board-note board-note-pink">take more<br>photos</span>
                <span class="board-note board-note-blue">enjoy life :)</span>
              </span>
              <span class="board-footer">GOALS & LITTLE REMINDERS ↗</span>
            </button>

            <button type="button" class="hall-gallery hall-object" data-panel="inspiration" aria-label="Places I want to go">
              <span class="gallery-frame">
                <span class="poster-sky"></span><span class="poster-sun"></span>
                <span class="poster-mountain poster-mountain-one"></span><span class="poster-mountain poster-mountain-two"></span>
                <span class="poster-water"></span>
              </span>
              <span class="gallery-caption">PLACES I WANT TO GO ↗</span>
            </button>

            <button type="button" class="hall-photo-frame hall-object" data-panel="photography" aria-label="Photography and photo diary">
              <span class="photo-art photo-art-camera"><span class="camera-flash"></span><span class="camera-body"><span class="camera-lens"></span></span></span>
              <small>little moments, kept</small>
              <b>PHOTO DIARY ↗</b>
            </button>

            <button type="button" class="hall-speaker hall-object" data-panel="music" aria-label="Open music">
              <span class="speaker-top"></span><span class="speaker-driver speaker-driver-one"></span><span class="speaker-driver speaker-driver-two"></span>
              <span class="speaker-action">NOW PLAYING ↗</span>
            </button>
          </div>

          <div class="hall-door-row" aria-label="Explore rooms">
            <button type="button" class="hall-door hall-door-one" data-panel="learning" aria-label="Explore what I'm learning">
              <span class="hall-door-number">201</span>
              <span class="hall-door-name">LEARNING</span>
              <span class="hall-door-knob"></span>
              <span class="hall-door-action">OPEN DOOR ↗</span>
            </button>
            <button type="button" class="hall-door hall-door-two" data-panel="interests" aria-label="Explore things I'm into">
              <span class="hall-door-number">202</span>
              <span class="hall-door-name">CURRENTLY INTO</span>
              <span class="hall-door-knob"></span>
              <span class="hall-door-action">OPEN DOOR ↗</span>
            </button>
            <button type="button" class="hall-door hall-door-three" data-panel="travel" aria-label="Explore places I've been">
              <span class="hall-door-number">203</span>
              <span class="hall-door-name">TRAVEL LOG</span>
              <span class="hall-door-knob"></span>
              <span class="hall-door-action">OPEN DOOR ↗</span>
            </button>
            <button type="button" class="hall-door hall-door-four" data-panel="enjoy" aria-label="Explore my personal picks">
              <span class="hall-door-number">204</span>
              <span class="hall-door-name">PERSONAL PICKS</span>
              <span class="hall-door-knob"></span>
              <span class="hall-door-action">OPEN DOOR ↗</span>
            </button>
          </div>
          <div class="hall-baseboard" aria-hidden="true"></div>
        </section>

        <div class="hall-floor" aria-hidden="true">
          <span class="hall-floor-line"></span><span class="hall-floor-line"></span><span class="hall-floor-line"></span>
        </div>

        <div class="hall-info-panel" aria-hidden="true">
          <div class="dorm-info-card" role="dialog" aria-modal="true" aria-label="Portfolio details">
            <button type="button" class="dorm-info-close" aria-label="Close details">×</button>
            <div class="dorm-info-content"></div>
          </div>
        </div>
      </main>

      <footer class="hall-footer">
        <span>RESIDENCE HALL · FLOOR 2</span>
        <span>HOVER TO EXPLORE · TAP TO OPEN ↗</span>
      </footer>
    </div>
  `;

  const infoPanel = section.querySelector(".hall-info-panel");
  const infoContent = section.querySelector(".dorm-info-content");
  const closeInfo = section.querySelector(".dorm-info-close");
  let lastTrigger = null;

  const panels = {
    goals: {
      eyebrow: "OFF THE CLOCK",
      title: "current goals",
      body: `
        <div class="dorm-content-list">
          <span>Travel within the next year</span>
          <span>Learn ASL</span>
          <span>Learn another language</span>
          <span>Take more photos!!</span>
          <span>See more live music/concerts</span>
          <span>Get better at cooking...</span>
        </div>
      `,
    },

    learning: {
      eyebrow: "CURRENTLY GETTING BETTER AT",
      title: "exploring",
      body: `
        <div class="dorm-pill-grid">
          <span>ASL</span>
          <span>React js</span>
          <span>Photography</span>
          <span>Whatever catches my attention</span>
        </div>
      `,
    },

    inspiration: {
      eyebrow: "THE WALL",
      title: "places i want to go",
      body: `
        <div class="dorm-inspiration-list">

          <a>
            <span>01</span>
            <strong>[sea of stars]</strong>
            <small>maldives</small>
          </a>

          <a>
            <span>02</span>
            <strong>[sapa]</strong>
            <small>vietnam</small>
          </a>

          <a>
            <span>03</span>
            <strong>[Marrakesh]</strong>
            <small>morocco</small>
          </a>

          <a>
            <span>04</span>
            <strong>[milan]</strong>
            <small>italy</small>
          </a>

          <a>
            <span>05</span>
            <strong>[oslo]</strong>
            <small>norway</small>
          </a>

        </div>
      `,
    },

    travel: {
      eyebrow: "TRAVEL",
      title: "stamps of travel",
      body: `
        <div class="travel-stamps">

          <div class="travel-stamp">
            <strong>Singapore</strong>
            <span>SG</span>
          </div>

          <div class="travel-stamp">
            <strong>Malaysia</strong>
            <span>MY</span>
          </div>

          <div class="travel-stamp">
            <strong>Thailand</strong>
            <span>TH</span>
          </div>

          <div class="travel-stamp">
            <strong>Vietnam</strong>
            <span>VN</span>
          </div>

          <div class="travel-stamp">
            <strong>Indonesia</strong>
            <span>ID</span>
          </div>

          <div class="travel-stamp">
            <strong>Japan</strong>
            <span>JP</span>
          </div>

          <div class="travel-stamp">
            <strong>South Korea</strong>
            <span>KR</span>
          </div>

          <div class="travel-stamp">
            <strong>Eritrea</strong>
            <span>ER</span>
          </div>

        </div>
      `,
    },

    photography: {
      eyebrow: "PHOTOGRAPHY",
      title: "pics",
      body: `
        <div class="dorm-photo-content">

          <p>
            digital camera pic dump :)
          </p>

          <a
            href="${instagramUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW PHOTOS ↗
          </a>

        </div>
      `,
    },

    interests: {
      eyebrow: "THE BOOKSHELF",
      title: "currently consuming",
      body: `
        <div class="reading-list">

          <div class="reading-item">
            <span class="reading-number">01</span>
            <div>
              <strong>[A COURT OF THORNS AND ROSES]</strong>
              <small>[SARAH J. MAAS]</small>
            </div>
            <span class="reading-status">CURRENTLY READING</span>
          </div>

          <div class="reading-item">
            <span class="reading-number">02</span>
            <div>
              <strong>[SUITS]</strong>
              <small>[TV SHOW]</small>
            </div>
            <span class="reading-status">CURRENTLY WATCHING</span>
          </div>

          <div class="reading-item">
            <span class="reading-number">03</span>
            <div>
              <strong>[ROTTEN MANGO]</strong>
              <small>[STEPHANIE SOO]</small>
            </div>
            <span class="reading-status">PODCAST</span>
          </div>

          <div class="reading-item">
            <span class="reading-number">04</span>
            <div>
              <strong>[THE KEVIN LANGUE SHOW]</strong>
              <small>[KEVIN LANGUE]</small>
            </div>
            <span class="reading-status">YOUTUBE (now also on Netflix)</span>
          </div>

        </div>
      `,
    },

    music: {
      eyebrow: "MUSIC",
      title: "what i'm listening to",
      body: `
        <div class="dorm-music-content">
          <span class="music-symbol">♫</span>

          <p>
            The album I listened to most while making this.
          </p>

          <div class="music-placeholder">
            <small>CURRENTLY PLAYING</small>
            <strong>Do You Still Love Me? / Ella Mai</strong>
          </div>
        </div>
      `,
    },

    enjoy: {
      eyebrow: "Recommendations",
      title: "personal picks",
      body: `
        <div class="favorites-list">

          <div class="favorite-item">
            <span class="favorite-label">ANIMATED MOVIE</span>
            <strong>[cars 2006]</strong>
          </div>

          <div class="favorite-item">
            <span class="favorite-label">TV SHOW</span>
            <strong>[how to get away with murder]</strong>
          </div>

          <div class="favorite-item">
            <span class="favorite-label">ARTIST</span>
            <strong>[ella mai]</strong>
          </div>

          <div class="favorite-item">
            <span class="favorite-label">ANIME</span>
            <strong>[fullmetal alchemist: brotherhood]</strong>
          </div>

          <div class="favorite-item">
            <span class="favorite-label">TRAVEL</span>
            <strong>[vietnam]</strong>
          </div>

          <div class="favorite-item">
            <span class="favorite-label">MUSICALS</span>
            <strong>[the greatest showman]</strong>
          </div>

          <div class="favorite-item">
            <span class="favorite-label">TV COMEDY</span>
            <strong>[the vince staples show]</strong>
          </div>

          <div class="favorite-item">
            <span class="favorite-label">FICTIONAL WORLD</span>
            <strong>[harry potter]</strong>
          </div>

        </div>
      `,
    },
  };

  function openPanel(name, trigger) {
    const data = panels[name];
    if (!data) return;
    lastTrigger = trigger || document.activeElement;
    infoContent.innerHTML = `
      <span class="dorm-info-eyebrow">${data.eyebrow}</span>
      <h2>${data.title}</h2>
      <div class="dorm-info-body">${data.body}</div>
    `;
    infoPanel.classList.add("is-open");
    infoPanel.setAttribute("aria-hidden", "false");
    closeInfo.focus();
    requestAnimationFrame(() =>
      infoPanel.scrollIntoView({ behavior: "smooth", block: "center" }),
    );
  }

  function closePanel() {
    infoPanel.classList.remove("is-open");
    infoPanel.setAttribute("aria-hidden", "true");
    if (lastTrigger && typeof lastTrigger.focus === "function")
      lastTrigger.focus();
  }

  section.querySelectorAll("[data-panel]").forEach((object) => {
    const tooltip = document.createElement("span");
    tooltip.className = "explore-tooltip";
    tooltip.setAttribute("aria-hidden", "true");
    tooltip.textContent = "Tap to explore";
    object.appendChild(tooltip);
    object.addEventListener("click", () =>
      openPanel(object.dataset.panel, object),
    );
  });
  closeInfo.addEventListener("click", closePanel);
  infoPanel.addEventListener("click", (event) => {
    if (event.target === infoPanel) closePanel();
  });
  section.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && infoPanel.classList.contains("is-open"))
      closePanel();
  });

  return section;
}