export function Beyond({ onBack }) {
  const section = document.createElement("div");

  section.classList.add("dorm-portfolio");

  const instagramUrl =
    "https://www.instagram.com/ericasdigitalcampus";

  section.innerHTML = `
    <div class="dorm-room-scene">

      <!-- WALL -->
      <div class="dorm-wall">

        <div class="dorm-window">
          <div class="dorm-window-glass">
            <span class="window-cloud window-cloud-one"></span>
            <span class="window-cloud window-cloud-two"></span>
            <span class="window-building"></span>
            <span class="window-tree window-tree-one"></span>
            <span class="window-tree window-tree-two"></span>
          </div>

          <div class="window-frame window-frame-top"></div>
          <div class="window-frame window-frame-bottom"></div>
          <div class="window-frame window-frame-left"></div>
          <div class="window-frame window-frame-right"></div>
          <div class="window-frame window-frame-middle"></div>
        </div>


        <!-- PHOTO / ART WALL -->
        <div class="dorm-gallery-wall">

          <button
            type="button"
            class="wall-photo wall-photo-large"
            data-panel="inspiration"
            aria-label="People who inspire me"
          >
            <span class="wall-photo-image">
              <span>PHOTO</span>
            </span>
            <span class="wall-photo-caption">
              inspired by
            </span>
          </button>

          <button
            type="button"
            class="wall-photo wall-photo-small"
            data-panel="inspiration"
            aria-label="People who inspire me"
          >
            <span class="wall-photo-image wall-photo-art">
              <span>ART</span>
            </span>
          </button>

          <div class="wall-postcard">
            <span>HELLO</span>
            <strong>FROM...<br />SOMEWHERE</strong>
          </div>

          <div class="wall-tape wall-tape-one"></div>
          <div class="wall-tape wall-tape-two"></div>
        </div>


        <!-- CORKBOARD -->
        <button
          type="button"
          class="dorm-corkboard"
          data-panel="goals"
          aria-label="Goals"
        >
          <span class="corkboard-frame"></span>

          <span class="cork-note cork-note-one">
            VISIT<br />SOMEWHERE<br />NEW
          </span>

          <span class="cork-note cork-note-two">
            ENJOY<br />LIFE :)
          </span>

          <span class="cork-note cork-note-three">
            TAKE<br />MORE<br />PHOTOS
          </span>

          <span class="cork-photo">
            <span>✦</span>
          </span>

          <span class="cork-pin cork-pin-one"></span>
          <span class="cork-pin cork-pin-two"></span>
          <span class="cork-pin cork-pin-three"></span>
        </button>


        <!-- ROOM SIGN -->
        <div class="dorm-sign">
          <span>Room</span>
          <strong>204</strong>
        </div>

      </div>


      <!-- FLOOR -->
      <div class="dorm-floor">

        <div class="dorm-rug">
          <span></span>
          <span></span>
          <span></span>
        </div>


        <!-- BED -->
        <div class="bed-area">
          <div class="bed-headboard"></div>
          <div class="bed-mattress">
            <div class="bed-pillow bed-pillow-one"></div>
            <div class="bed-pillow bed-pillow-two"></div>
            <div class="bed-cover"></div>
          </div>

          <div class="bed-frame"></div>

          <button
            type="button"
            class="bed-object"
            data-panel="enjoy"
            aria-label="Things I Enjoy"
          >
            <span class="bed-object-label">
            </span>
          </button>

        </div>


        <!-- NIGHTSTAND -->
        <div class="dorm-nightstand">

          <div class="nightstand-top"></div>
          <div class="nightstand-body"></div>
          <div class="nightstand-drawer"></div>
          <div class="nightstand-handle"></div>

          <div class="nightstand-lamp">
            <span class="lamp-shade"></span>
            <span class="lamp-stem"></span>
            <span class="lamp-base"></span>
          </div>

        </div>


        <!-- DESK -->
        <div class="dorm-desk">

          <div class="desk-top"></div>

          <div class="desk-drawer desk-drawer-one"></div>
          <div class="desk-drawer desk-drawer-two"></div>

          <div class="desk-leg desk-leg-one"></div>
          <div class="desk-leg desk-leg-two"></div>
          <div class="desk-leg desk-leg-three"></div>

          <!-- MONITOR -->
          <button
            type="button"
            class="desk-monitor"
            data-panel="learning"
            aria-label="Things I'm learning"
          >
            <span class="monitor-screen">

              <small>please</small>

              <strong>
                go to bed
              </strong>

              <span class="monitor-tags">
                you got this!!
              </span>

            </span>

            <span class="monitor-stand"></span>
            <span class="monitor-base"></span>
          </button>


          <!-- LAPTOP -->
          <div class="desk-laptop">
            <span class="laptop-screen"></span>
            <span class="laptop-base"></span>
          </div>


          <!-- NOTEBOOK -->
          <div class="desk-notebook">
            <span></span>
            <span></span>
            <span></span>
          </div>


          <!-- CAMERA -->
          <button
            type="button"
            class="desk-camera"
            data-panel="photography"
            aria-label="Photography"
          >
            <span class="camera-body">
              <span class="camera-lens"></span>
              <span class="camera-viewfinder"></span>
              <span class="camera-button"></span>
            </span>
          </button>


          <!-- HEADPHONES -->
          <button
            type="button"
            class="desk-headphones"
            data-panel="music"
            aria-label="Music"
          >
            <span class="headphone-band"></span>
            <span class="headphone-left"></span>
            <span class="headphone-right"></span>
          </button>


          <div class="desk-cup">
            <span></span>
          </div>

        </div>


        <!-- BOOKSHELF -->
        <div class="dorm-bookshelf">

          <div class="bookshelf-side bookshelf-side-left"></div>
          <div class="bookshelf-side bookshelf-side-right"></div>

          <div class="bookshelf-shelf shelf-onee"></div>
          <div class="bookshelf-shelf shelf-twoo"></div>
          <div class="bookshelf-shelf shelf-three"></div>
          <div class="bookshelf-shelf shelf-four"></div>

          <button
            type="button"
            class="bookshelf-books"
            data-panel="interests"
            aria-label="Things I'm into"
          >
            <span class="book book-one"></span>
            <span class="book book-two"></span>
            <span class="book book-three"></span>
            <span class="book book-four"></span>
            <span class="book book-five"></span>

            <span class="book-label">
              currently into
            </span>
          </button>

          <div class="bookshelf-plant">
            <span class="plant-pot"></span>
            <span class="plant-leaf leaf-one"></span>
            <span class="plant-leaf leaf-two"></span>
            <span class="plant-leaf leaf-three"></span>
            <span class="plant-leaf leaf-four"></span>
          </div>

        </div>


        <!-- SUITCASE -->
        <button
          type="button"
          class="dorm-suitcase"
          data-panel="travel"
          aria-label="Places I've been"
        >
          <span class="suitcase-handle"></span>

          <span class="suitcase-body">

            <span class="suitcase-sticker sticker-airplane">
              ✈
            </span>

            <span class="suitcase-sticker sticker-sg">
              SG
            </span>

            <span class="suitcase-sticker sticker-star">
              ★
            </span>

            <span class="suitcase-seam"></span>

          </span>
        </button>


        <!-- TOTE BAG -->
        <div class="dorm-tote">
          <span class="tote-handle"></span>
          <span class="tote-body">
            <strong>UNC</strong>
            <small>CHAPEL HILL</small>
          </span>
        </div>


        <!-- FLOOR PILLOW -->
        <div class="floor-pillow"></div>


        <!-- SMALL PLANT -->
        <div class="floor-plant">
          <span class="floor-plant-pot"></span>
          <span class="floor-leaf leaf-one"></span>
          <span class="floor-leaf leaf-two"></span>
          <span class="floor-leaf leaf-three"></span>
          <span class="floor-leaf leaf-four"></span>
        </div>


        <!-- EXPLORATION PANEL -->
        <div
          class="dorm-info-panel"
          aria-hidden="true"
        >
          <div class="dorm-info-card">

            <button
              type="button"
              class="dorm-info-close"
              aria-label="Close"
            >
              ×
            </button>

            <div class="dorm-info-content"></div>

          </div>
        </div>

      </div>


      <!-- SMALL TOP LABEL -->
      <div class="dorm-room-title">
        <span>ROOM 204</span>
        <strong>EXPLORE MY ROOM :)</strong>
      </div>

    </div>
  `;


  const infoPanel =
    section.querySelector(
      ".dorm-info-panel"
    );

  const infoContent =
    section.querySelector(
      ".dorm-info-content"
    );

  const closeInfo =
    section.querySelector(
      ".dorm-info-close"
    );


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
          <span>Try something completely new</span>
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
            <strong>[marrakes]</strong>
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


  function openPanel(name) {
  const data = panels[name];

  if (!data) {
    return;
  }

  infoContent.innerHTML = `
    <span class="dorm-info-eyebrow">
      ${data.eyebrow}
    </span>

    <h2>
      ${data.title}
    </h2>

    <div class="dorm-info-body">
      ${data.body}
    </div>
  `;

  infoPanel.classList.add("is-open");

  infoPanel.setAttribute(
    "aria-hidden",
    "false"
  );

  // Bring the popup into view automatically
  requestAnimationFrame(() => {
    infoPanel.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
}


  function closePanel() {
    infoPanel.classList.remove(
      "is-open"
    );

    infoPanel.setAttribute(
      "aria-hidden",
      "true"
    );
  }


  section
    .querySelectorAll(
      "[data-panel]"
    )
    .forEach((object) => {

      object.addEventListener(
        "click",
        () => {
          openPanel(
            object.dataset.panel
          );
        }
      );

    });


  closeInfo.addEventListener(
    "click",
    closePanel
  );


  infoPanel.addEventListener(
    "click",
    (event) => {

      if (
        event.target === infoPanel
      ) {
        closePanel();
      }

    }
  );


  return section;
}