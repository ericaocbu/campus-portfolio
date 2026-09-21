export function Experience() {
  const section = document.createElement("div");
  section.classList.add("experience-room");

  /*
   * EXPERIENCE DATA
   */

  const experienceData = {
    locus: {
      number: "01",
      type: "CURRENT",
      title: "Front-End UI Developer",
      company: "Locus Technologies",
      location: "Remote",
      dates: "June 2026 – Present",
      color: "green",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git",
        "Responsive Design",
      ],
      summary:
        "Building responsive interfaces and translating design concepts into functional, reusable UI.",
      details: `
        <p>
          I develop responsive web interfaces using HTML, CSS,
          JavaScript, and React, translating design concepts and
          wireframes into reusable, functional UI components.
        </p>

        <p>
          I debug and maintain clean, efficient code using Git,
          improving usability, consistency, and reliability across
          the product.
        </p>

        <p>
          I also implement interactive UI elements and optimize
          interfaces for cross-browser compatibility and different
          device sizes.
        </p>
      `,
    },

    rapid: {
      number: "02",
      type: "RESEARCH",
      title: "Research Intern",
      company: "Carolina Health Informatics Program — RAPID",
      location: "Chapel Hill, NC",
      dates: "June - July 2025",
      color: "rust",
      skills: [
        "Python",
        "Research",
        "Data Analysis",
        "Figma",
        "Health Informatics",
      ],
      summary:
        "Explored linguistic patterns in online mental-health discussions and translated findings into a human-centered research tool.",
      details: `
        <p>
          I conducted data-driven mental health research using
          Python and statistical methods to analyze Reddit posts
          and identify linguistic markers associated with emotional
          distress.
        </p>

        <p>
          I explored features including sentiment, subjectivity,
          pronoun usage, absolutist language, future-oriented
          language, and high-risk word counts.
        </p>

        <p>
          I also created a Figma prototype for clinicians and
          moderators that visualized linguistic patterns and
          severity trends, translating research findings into a
          human-centered support tool.
        </p>
      `,
    },

    nus: {
      number: "03",
      type: "STUDY ABROAD",
      title: "Interaction Design Student",
      company: "National University of Singapore",
      location: "Singapore",
      dates: "Fall 2025",
      color: "blue",
      skills: [
        "Interaction Design",
        "HCI",
        "User-Centered Design",
        "Usability",
        "Prototyping",
        "IoT",
      ],
      summary:
        "Explored human-computer interaction and user-centered design while collaborating with local and international students in Singapore.",
      details: `
        <p>
          I studied Interaction Design at the National University of
          Singapore, focusing on human-computer interaction, usability,
          and user-centered design.
        </p>

        <p>
          The course explored the process of analyzing, designing,
          developing, and evaluating interactive experiences, with
          attention to how technology can be shaped around people's
          needs and contexts.
        </p>

        <p>
          I also worked with a team of local and international students,
          gaining experience collaborating across different perspectives
          and approaches to design.
        </p>

        <p>
          Outside of Interaction Design, I also took another 
          computer science class called "Introduction
          to the Internet of Things," expanding my understanding of how
          connected technology can interact with people and their
          environments.
        </p>
      `,
    },

    ra: {
      number: "04",
      type: "LEADERSHIP",
      title: "Resident Advisor",
      company: "Carolina Housing",
      location: "Chapel Hill, NC",
      dates: "2024 – 2025",
      color: "gold",
      skills: [
        "Community Building",
        "Leadership",
        "Programming",
        "Inclusion",
      ],
      summary:
        "Created community programs that encouraged connection, resilience, and belonging.",
      details: `
        <p>
          As a Resident Advisor, I designed and implemented
          community programs that encouraged residents to build
          connections and develop a stronger sense of belonging.
        </p>

        <p>
          My work focused on resilience, values development,
          equity, and inclusion while creating opportunities for
          residents to connect with one another.
        </p>
      `,
    },

    sog: {
      number: "05",
      type: "DESIGN + SYSTEMS",
      title: "User Systems & Experience Analyst",
      company: "UNC School of Government",
      location: "Chapel Hill, NC",
      dates: "2023 – 2024",
      color: "blue",
      skills: [
        "Visual Design",
        "Accessibility",
        "Digital Systems",
        "User Experience",
      ],
      summary:
        "Improved presentation materials and supported digital classroom systems for faculty and students.",
      details: `
        <p>
          I redesigned academic presentation materials with a
          focus on visual hierarchy, clarity, and accessibility.
        </p>

        <p>
          I also supported and maintained classroom digital systems
          used by faculty and students, helping keep technology
          workflows functional and user-friendly.
        </p>
      `,
    },

    dentistry: {
      number: "06",
      type: "SYSTEMS + SUPPORT",
      title: "User Systems Support Specialist",
      company: "UNC School of Dentistry",
      location: "Chapel Hill, NC",
      dates: "2022 – 2023",
      color: "teal",
      skills: [
        "Technical Support",
        "Healthcare",
        "User Workflows",
        "Problem Solving",
      ],
      summary:
        "Supported user-facing software and technical workflows in clinical and academic healthcare environments.",
      details: `
        <p>
          I supported user-facing software and technical workflows
          across clinical and academic healthcare environments.
        </p>

        <p>
          I worked directly with faculty and staff to understand
          workflow pain points and provide user-centered technical
          solutions.
        </p>
      `,
    },
  };


  /*
   * HEADER
   */

  const header = document.createElement("div");
  header.classList.add("experience-header");

  header.innerHTML = `
    <div class="experience-header-copy">
      <span class="experience-eyebrow">
        LECTURE HALL 204
      </span>
    </div>
  `;

  section.appendChild(header);


  /*
   * LECTURE HALL FRONT
   */

  const lectureFront = document.createElement("div");
  lectureFront.classList.add("lecture-front");

  lectureFront.innerHTML = `
    <div class="lecture-wall-light lecture-wall-light-left"></div>
    <div class="lecture-wall-light lecture-wall-light-right"></div>

    <div class="lecture-screen-frame">

      <div class="lecture-screen-header">
        <span>CAREER PRESENTATION</span>
        <span>ERICA · 2026</span>
      </div>

      <div class="lecture-screen">

        <div class="screen-content">

          <span class="screen-kicker">
            CURRENT ROLE
          </span>

          <h2>
            Front-End UI Developer
          </h2>

          <p class="screen-company">
            Locus Technologies
          </p>

          <div class="screen-meta">
            <span>REMOTE</span>
            <span>JUNE 2026 – PRESENT</span>
          </div>

          <div class="screen-skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>

        </div>

        <div class="screen-decoration">
          <div class="screen-window window-a"></div>
          <div class="screen-window window-b"></div>
          <div class="screen-window window-c"></div>
          <div class="screen-window window-d"></div>
        </div>

      </div>

      <button
        class="screen-present-button"
        type="button"
        data-experience="locus"
      >
        <span>VIEW ROLE</span>
        <strong>→</strong>
      </button>

    </div>


    <div class="lecture-podium">

      <div class="podium-paper">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="podium-top"></div>

      <div class="podium-body">
        <span class="podium-name">
          ERICA
        </span>

        <span class="podium-subtitle">
          FRONT-END · UI/UX
        </span>
      </div>

      <div class="podium-base"></div>

    </div>
  `;

  section.appendChild(lectureFront);


  /*
   * ROOM DECORATIONS
   */

  const roomDecor = document.createElement("div");
  roomDecor.classList.add("lecture-room-decor");

  roomDecor.innerHTML = `
    <div class="wall-clock">
      <span class="clock-face">
        <span class="clock-hand clock-hand-hour"></span>
        <span class="clock-hand clock-hand-minute"></span>
        <span class="clock-center"></span>
      </span>
    </div>

    <div class="lecture-board">

      <div class="board-heading">
        TODAY'S NOTES
      </div>

      <div class="board-line board-line-long"></div>
      <div class="board-line board-line-medium"></div>

      <div class="board-equation">
        DESIGN
        <span>+</span>
        RESEARCH
        <span>+</span>
        CODE
      </div>

      <div class="board-line board-line-short"></div>

      <div class="board-note">
        user → idea → experience
      </div>

    </div>


    <div class="lecture-light lecture-light-left"></div>
    <div class="lecture-light lecture-light-right"></div>
  `;

  section.appendChild(roomDecor);


  /*
   * RESEARCH + STUDY ABROAD DISPLAYS
   */

  const displays = document.createElement("div");
  displays.classList.add("experience-displays");

  displays.innerHTML = `
    <button
      class="display-board rapid-display"
      type="button"
      data-experience="rapid"
    >
      <span class="display-pin pin-one"></span>
      <span class="display-pin pin-two"></span>

      <span class="display-label">
        RESEARCH BOARD
      </span>

      <strong>
        RAPID
      </strong>

      <small>
        Mental Health Research
      </small>

      <span class="display-paper paper-one">
        PYTHON
      </span>

      <span class="display-paper paper-two">
        REDDIT
      </span>

      <span class="display-paper paper-three">
        FIGMA
      </span>

      <span class="display-arrow">
        VIEW →
      </span>
    </button>


    <button
      class="display-board nus-display"
      type="button"
      data-experience="nus"
    >
      <span class="display-label">
        STUDY ABROAD
      </span>

      <div class="mini-globe">
        <span class="globe-line globe-line-one"></span>
        <span class="globe-line globe-line-two"></span>
        <span class="globe-line globe-line-three"></span>
      </div>

      <strong>
        NUS
      </strong>

      <small>
        Singapore · Fall 2025
      </small>

      <span class="display-route">
        NC → SG
      </span>
    </button>
  `;

  section.appendChild(displays);


  /*
   * TIERED LECTURE SEATING
   */

  const seating = document.createElement("div");
  seating.classList.add("lecture-seating");

  const rowData = [
    {
      row: "front",
      cards: ["locus", "rapid"],
    },
    {
      row: "middle",
      cards: ["ra", "sog"],
    },
    {
      row: "back",
      cards: ["dentistry"],
    },
  ];

  rowData.forEach((rowDataItem) => {
    const row = document.createElement("div");

    row.classList.add(
      "lecture-row",
      `lecture-row-${rowDataItem.row}`
    );

    rowDataItem.cards.forEach((experienceId) => {
      const data = experienceData[experienceId];

      const desk = document.createElement("button");

      desk.type = "button";

      desk.classList.add(
        "experience-desk",
        `desk-${experienceId}`,
        `desk-${data.color}`
      );

      desk.dataset.experience = experienceId;

      desk.innerHTML = `
        <span class="desk-shadow"></span>

        <span class="desk-surface">

          <span class="desk-number">
            ${data.number}
          </span>

          <span class="desk-paper">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <span class="desk-pencil"></span>

        </span>

        <span class="desk-front">

          <span class="desk-title">
            ${data.title}
          </span>

          <span class="desk-company">
            ${data.company}
          </span>

          <span class="desk-view">
            VIEW EXPERIENCE →
          </span>

        </span>

        <span class="desk-chair">
          <span class="chair-back"></span>
          <span class="chair-seat"></span>
          <span class="chair-leg chair-leg-left"></span>
          <span class="chair-leg chair-leg-right"></span>
        </span>
      `;

      row.appendChild(desk);
    });

    seating.appendChild(row);
  });

  section.appendChild(seating);


  /*
   * LECTURE NOTES
   */

  const notes = document.createElement("div");
  notes.classList.add("lecture-notes");

  notes.innerHTML = `
    <div class="lecture-note note-left">
      <span class="note-pin"></span>
      <small>LECTURE NOTE</small>
      <strong>
        Build with<br />
        intention.
      </strong>
      <span class="note-line"></span>
      <span class="note-line short"></span>
    </div>

    <div class="lecture-note note-right">
      <span class="note-pin"></span>
      <small>LECTURE NOTE</small>
      <strong>
        Design Portfolio<br />
        due tonight @11:59PM
      </strong>
      <span class="note-star">✦</span>
    </div>
  `;

  section.appendChild(notes);


  /*
   * ROOM FLOOR DETAILS
   */

  const floorDetails = document.createElement("div");
  floorDetails.classList.add("lecture-floor-details");

  floorDetails.innerHTML = `
    <div class="floor-marker">
      <span>ROOM</span>
      <strong>204</strong>
    </div>

    <div class="floor-lines">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;

  section.appendChild(floorDetails);


  /*
   * EXPERIENCE MODAL
   */

  const detailOverlay = document.createElement("div");
  detailOverlay.classList.add("experience-detail");
  detailOverlay.setAttribute("aria-hidden", "true");

  detailOverlay.innerHTML = `
    <div class="experience-detail-backdrop"></div>

    <div
      class="experience-detail-panel"
      role="dialog"
      aria-modal="true"
      aria-label="Experience details"
    >

      <button
        class="experience-detail-close"
        type="button"
        aria-label="Close experience details"
      >
        ×
      </button>

      <div class="detail-top">
        <span class="detail-number"></span>
        <span class="detail-type"></span>
      </div>

      <div class="detail-heading">
        <span class="detail-eyebrow">
          EXPERIENCE
        </span>

        <h2 class="detail-title"></h2>

        <p class="detail-company"></p>
      </div>

      <div class="detail-meta">
        <span class="detail-location"></span>
        <span class="detail-dates"></span>
      </div>

      <div class="detail-divider"></div>

      <div class="detail-body">

        <div class="detail-summary"></div>

        <div class="detail-description"></div>

      </div>

      <div class="detail-skills">
        <span class="detail-skills-label">
          SKILLS + TOOLS
        </span>

        <div class="detail-skills-list"></div>
      </div>

    </div>
  `;

 document.body.appendChild(detailOverlay);


  /*
   * MODAL ELEMENTS
   */

  const detailTitle =
    detailOverlay.querySelector(".detail-title");

  const detailType =
    detailOverlay.querySelector(".detail-type");

  const detailNumber =
    detailOverlay.querySelector(".detail-number");

  const detailCompany =
    detailOverlay.querySelector(".detail-company");

  const detailLocation =
    detailOverlay.querySelector(".detail-location");

  const detailDates =
    detailOverlay.querySelector(".detail-dates");

  const detailSummary =
    detailOverlay.querySelector(".detail-summary");

  const detailDescription =
    detailOverlay.querySelector(".detail-description");

  const detailSkillsList =
    detailOverlay.querySelector(".detail-skills-list");

  const detailClose =
    detailOverlay.querySelector(
      ".experience-detail-close"
    );


  /*
   * OPEN EXPERIENCE
   */

  function openExperience(id) {
    const data = experienceData[id];

    if (!data) return;

    detailNumber.textContent =
      data.number;

    detailType.textContent =
      data.type;

    detailTitle.textContent =
      data.title;

    detailCompany.textContent =
      data.company;

    detailLocation.textContent =
      data.location;

    detailDates.textContent =
      data.dates;

    detailSummary.textContent =
      data.summary;

    detailDescription.innerHTML =
      data.details;

    detailSkillsList.innerHTML =
      data.skills
        .map(
          (skill) =>
            `<span>${skill}</span>`
        )
        .join("");

    detailOverlay.dataset.color =
      data.color;

    detailOverlay.classList.add(
      "is-open"
    );

    detailOverlay.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "experience-modal-open"
    );
  }


  /*
   * CLOSE EXPERIENCE
   */

  function closeExperience() {
    detailOverlay.classList.remove(
      "is-open"
    );

    detailOverlay.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "experience-modal-open"
    );
  }


  /*
   * EXPERIENCE BUTTONS
   */

  section
    .querySelectorAll(
      "[data-experience]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          event.stopPropagation();

          openExperience(
            button.dataset.experience
          );
        }
      );
    });


  /*
   * CLOSE EVENTS
   */

  detailClose.addEventListener(
    "click",
    closeExperience
  );

  detailOverlay
    .querySelector(
      ".experience-detail-backdrop"
    )
    .addEventListener(
      "click",
      closeExperience
    );


  /*
   * ESCAPE
   */

  function handleEscape(event) {
    if (
      event.key === "Escape" &&
      detailOverlay.classList.contains(
        "is-open"
      )
    ) {
      closeExperience();
    }
  }

  document.addEventListener(
    "keydown",
    handleEscape
  );


  /*
   * RETURN SECTION
   */

  return section;
}