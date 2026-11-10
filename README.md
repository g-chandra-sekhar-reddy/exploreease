# ExploreEase – Travel Discovery & Trip Planner

**Discover. Explore. Plan.**

ExploreEase is a responsive travel discovery and trip planning web application built with React. It helps users explore destinations, search for places, save favourites, organize trips, and check weather forecasts.

## Features

- **Destination Discovery:** Explore popular destinations around the world.
- **Search:** Find destinations by name or country.
- **Destination Details:** View information about individual destinations.
- **Favourites:** Save and remove favourite destinations.
- **Trip Planner:** Create, view, and delete travel plans with selected dates.
- **Weather Information:** View current weather conditions and a five-day forecast.
- **Responsive Design:** Works across desktop, tablet, and mobile devices.
- **Local Storage:** Retains favourites and planned trips after refreshing the browser.

## Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- Vite
- React Router DOM
- Open-Meteo Weather API
- Browser Local Storage

## Project Structure

```text
exploreease/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── DestinationCard/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── PopularDestinations/
│   │   └── Weather/
│   ├── data/
│   │   └── destinations.js
│   ├── pages/
│   │   ├── DestinationDetails/
│   │   ├── Favourites/
│   │   └── TripPlanner/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/g-chandra-sekhar-reddy/exploreease.git
```

2. Navigate to the project directory:

```bash
cd exploreease
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL displayed in your terminal.

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Weather API

Weather information is powered by the [Open-Meteo API](https://open-meteo.com/).

The application uses destination coordinates to retrieve current weather conditions and a five-day forecast. No API key is required for standard non-commercial use.

## Data Storage

ExploreEase uses browser Local Storage to save users' favourite destinations and planned trips. This is a frontend-only application and does not require a backend database.

## Future Improvements

- User authentication
- Interactive maps and destination locations
- More destination recommendations
- Enhanced trip management
- Travel budget estimation

## Author

**G. Chandra Sekhar Reddy**

- GitHub: [g-chandra-sekhar-reddy](https://github.com/g-chandra-sekhar-reddy)

---

*ExploreEase – Discover. Explore. Plan.*