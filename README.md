#  NASA Explorer

**NASA Explorer** is an interactive space data visualization platform powered by multiple NASA Open APIs. It allows users to browse daily astronomy pictures, visualize near-Earth asteroid data, and track the International Space Station (ISS) in real-time.

🌌 Explore the universe in one place — from stunning images to orbital paths!

---

##  Features

-  **Astronomy Picture of the Day (APOD)**
  - View NASA’s daily astronomy photo with title, explanation, and high-resolution link
  - Supports date selection and quick navigation

-  **Near-Earth Object (NEO) Statistics**
  - Interactive bar charts of asteroid counts and potentially hazardous objects (via Chart.js)
  - Detailed asteroid info including name, size, velocity, and miss distance
  - Embedded NASA "Eyes on Asteroids" orbit viewer

-  **Real-Time ISS Tracker**
  - 2D map (Leaflet.js) with live ISS coordinates
  - 3D globe view (CesiumJS) with smooth animation and orbit trail
  - Toggle between "Track ISS" and "View Earth" modes

---

##  Tech Stack

| Category       | Technologies Used                              |
|----------------|-------------------------------------------------|
| Framework      | Vue 3 + Composition API                         |
| Build Tool     | Vite                                            |
| Language       | TypeScript                                      |
| Styling        | Tailwind CSS                                    |
| Visualization  | Chart.js for asteroid statistics                |
| Mapping        | Leaflet.js (2D), CesiumJS (3D globe visualization) |
| API Sources    | NASA Open APIs (APOD, NEO, ISS)                 |
| Deployment     | Netlify                               |

##  Live Demo

🔗 [Try it online](https://nasa-explorer-z.netlify.app/apod) 
