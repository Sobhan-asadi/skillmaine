# SkillMaine

SkillMaine is a responsive learning-platform frontend built with React 19 and Vite.

The project focuses on course discovery rather than a full LMS workflow. Users can explore a searchable course catalog, filter and sort courses, inspect detailed course information and curricula, follow curated learning paths, and maintain a persistent learning cart.

> This is a portfolio demonstration project. Course data, instructors, reviews, enrollment, and checkout behavior are simulated and no real payments are processed.

## Live Demo

https://skillmaine.netlify.app/

## Features

- Searchable course catalog
- Category and level filtering
- Featured, rating, and price sorting
- Dynamic course detail pages
- Course curriculum and requirements
- Curated learning paths
- Persistent Redux cart using localStorage
- Demo checkout interaction
- Responsive desktop and mobile navigation
- Loading, error, empty, and 404 states
- Route-specific page titles and descriptions
- SPA routing configured for Netlify deployment

## Tech Stack

- React 19
- Vite 7
- React Router
- TanStack Query
- Redux Toolkit
- Tailwind CSS 4
- React Hot Toast
- React Icons
- ESLint

## Architecture

The project separates server-state-style course retrieval, global cart state, routing, and presentation concerns.

```text
src/
├── api/
├── components/
│   ├── about/
│   ├── cart/
│   ├── catalog/
│   ├── details/
│   ├── experiences/
│   ├── home/
│   └── navigation/
├── pages/
├── routes/
└── store/
```

Course data is served as static JSON from the `public/data` directory. TanStack Query manages course fetching and cache behavior, while Redux Toolkit manages the learning cart and persists selected courses to `localStorage`.

## Main Routes

```text
/                       Home
/courses                Course catalog
/courses/:courseId      Course details
/experiences            Learning paths
/about                  About the platform
/cart                   Learning cart
```

Unknown routes are handled by a custom 404 experience.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/Sobhan-asadi/skillmaine.git
cd skillmaine
npm install
npm run dev
```

## Production Build

```bash
npm run lint
npm run build
```

The production build is deployed on Netlify. A `_redirects` fallback is included so client-side React Router routes continue to work when opened or refreshed directly.

## Project Scope

SkillMaine intentionally focuses on frontend product experience and architecture rather than pretending to provide production LMS functionality.

The project does not implement:

- Real authentication
- Real enrollment
- Payment processing
- Certificates
- Instructor dashboards
- A production backend

These boundaries keep the demo behavior explicit and the implementation aligned with the actual scope of the project.

## Author

**Sobhan Asadi**

- GitHub: https://github.com/Sobhan-asadi
- Portfolio: https://sobhanportfolio.netlify.app
