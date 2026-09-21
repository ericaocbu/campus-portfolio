# Campus Portfolio
<img width="1512" height="784" alt="Screenshot 2026-09-20 at 11 42 51 PM" src="https://github.com/user-attachments/assets/54f9922e-3e4a-4bfa-96a4-74e8053ab46d" />



<br> An interactive portfolio website built around a virtual campus. Each area of the campus represents a 
different part of my portfolio, making it possible to explore my work, experience, education, and more 
in a less traditional way.

## Features

* Interactive campus navigation
  * Orientation Leader-led tour
* Library - about me (education, skills, and technologies) section
* Lecture Hall - experience section
* Innovation Lab - project portfolio section
* Food Canteen - contact me section
* The Dorms - play/hobbies section
* Interactive UI elements and animations
* Responsive design
* External links to projects and profiles

## Built With

* **JavaScript**
* **HTML**
* **CSS**
* **Git & GitHub**

## Project Structure

```text
campus-portfolio/
│
│
├── src/
│   │
│   ├── components/
│   │   ├── Building.js         # Individual campus building components
│   │   ├── CampusLife.js       # Campus life / dining area content
│   │   ├── CampusMap.js        # Interactive campus map
│   │   ├── Navigation.js       # Site and campus navigation
│   │   ├── ProjectCard.js      # Reusable project card component
│   │   ├── SectionView.js      # Displays content for selected sections
│   │   └── TourHUD.js          # Heads-up display for the campus tour
│   │
│   ├── data/
│   │   ├── campus.js           # Campus buildings and location data
│   │   └── projects.js         # Project portfolio data
│   │
│   ├── sections/
│   │   ├── About.js            # About / education / skills content
│   │   ├── Beyond.js           # Additional information and interests
│   │   ├── Contact.js          # Contact information
│   │   ├── Experience.js       # Professional experience
│   │   ├── Home.js             # Home / landing page content
│   │   └── Projects.js         # Project portfolio section
│   │
│   ├── styles/
│   │   ├── beyond.css          # Beyond section styles
│   │   ├── buildings.css       # Campus building styles
│   │   ├── campus.css          # Campus-wide styles
│   │   ├── contact.css         # Contact section styles
│   │   ├── experience.css      # Experience section styles
│   │   ├── library.css         # Library / About section styles
│   │   ├── projects.css        # Project section styles
│   │   └── sections.css        # Shared section styles
│   │
│   ├── main.js                 # Application entry point
│   └── style.css               # Main stylesheet
│
├── package.json
└── README.md
```

## Organization

The project is organized around the following structure:
- **components/** contains reusable JavaScript components that make up the interactive campus experience.
- **data/** stores structured information used throughout the portfolio, including campus locations and projects.
- **sections/** separates portfolio content into individual sections such as About, Experience, Projects, and Contact.
- **styles/** contains CSS files organized by campus areas and portfolio sections.
- **main.js** serves as the entry point for the application and initializes the campus experience,
  while **style.css** serves as the main stylesheet and imports the project's individual CSS files.

The campus itself acts as the main navigation system, with different buildings representing different areas of the portfolio.

## Live Website

[View the Campus Portfolio](https://ericaocbu.github.io/campus-portfolio/)
