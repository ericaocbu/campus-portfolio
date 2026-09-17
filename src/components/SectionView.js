import { Home } from "../sections/Home.js";
import { About } from "../sections/About.js";
import { Projects } from "../sections/Projects.js";
import { Experience } from "../sections/Experience.js";
import { Contact } from "../sections/Contact.js";
import { Beyond } from "../sections/Beyond.js";

export function SectionView(
  location,
  onBack,
  options = {}
) {
  const {
    tourActive = false,
    onStartTour = null,
    onNavigate = null,
  } = options;


  /*
   * MAIN SECTION CONTAINER
   */

  const section =
    document.createElement("section");

  section.classList.add(
    "section-view"
  );

  section.classList.add(
    `section-${location.id}`
  );


  /*
   * SHARED SECTION CONTENT
   *
   * This structure matches the
   * current sections.css:
   *
   * .section-content
   * .back-to-campus
   * .section-tour-indicator
   */

  const content =
    document.createElement("div");

  content.classList.add(
    "section-content"
  );


  /*
   * BACK TO CAMPUS
   */

  const backButton =
    document.createElement("button");

  backButton.classList.add(
    "back-to-campus"
  );

  backButton.type = "button";

  backButton.innerHTML = `
    <span>←</span>
    <span>BACK TO CAMPUS</span>
  `;

  backButton.addEventListener(
    "click",
    () => {
      onBack();
    }
  );

  content.appendChild(
    backButton
  );


  /*
   * TOUR INDICATOR
   */

  if (tourActive) {

    const tourIndicator =
      document.createElement("div");

    tourIndicator.classList.add(
      "section-tour-indicator"
    );

    tourIndicator.innerHTML = `
      <span class="section-tour-dot"></span>
      CAMPUS TOUR
    `;

    content.appendChild(
      tourIndicator
    );

  }


  /*
   * SECTION CONTENT
   */

  let sectionContent = null;


  if (location.id === "main-campus") {

    sectionContent =
      Home({
        onBack,
        onStartTour,
        onNavigate,
      });

  } else if (location.id === "library") {

    sectionContent =
      About({
        onBack,
        onStartTour,
        onNavigate,
      });

  } else if (
    location.id === "innovation-lab"
  ) {

    sectionContent =
      Projects({
        onBack,
        onStartTour,
        onNavigate,
      });

  } else if (
    location.id === "lecture-hall"
  ) {

    sectionContent =
      Experience({
        onBack,
        onStartTour,
        onNavigate,
      });

  } else if (
    location.id === "food-canteen"
  ) {

    sectionContent =
      Contact({
        onBack,
        onStartTour,
        onNavigate,
      });

  } else if (
    location.id === "utown"
  ) {

    sectionContent =
      Beyond({
        onBack,
        onStartTour,
        onNavigate,
      });

  } else {

    /*
     * FALLBACK
     */

    sectionContent =
      document.createElement("div");

    sectionContent.classList.add(
      "section-hero"
    );

    sectionContent.innerHTML = `
      <span class="section-label">
        ${location.section}
      </span>

      <h1>
        ${location.name}
      </h1>

      <p>
        ${location.description}
      </p>
    `;

  }


  /*
   * ADD THE SELECTED PAGE
   */

  if (sectionContent) {

    content.appendChild(
      sectionContent
    );

  }


  /*
   * ADD EVERYTHING TO SECTION
   */

  section.appendChild(
    content
  );


  return section;
}