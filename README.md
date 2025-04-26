# AI Safety Incident Dashboard

This is a React application built with TypeScript and Vite that allows users to view, filter, sort, and report AI safety incidents in-memory.

## Features

- Display a list of AI safety incidents with title, severity, and reported date.
- Toggle visibility of incident descriptions with a "View Details" button.
- Filter incidents by severity (All, Low, Medium, High).
- Sort incidents by reported date (Newest First, Oldest First).
- Report new incidents via a form with validation; new incidents appear immediately in the list.

## Tech StackA

- React with Functional Components and Hooks
- TypeScript for static typing
- Vite for fast bundling and development
- HTML & CSS with Flexbox and Grid for responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ai-safety-incident-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```
ai-safety-incident-dashboard/
├── public/                # Static public assets
├── src/
│   ├── assets/            # Static images (React & Vite logos)
│   │   ├── FilterControls.tsx
│   │   ├── SortControls.tsx
│   │   ├── IncidentItem.tsx
│   │   ├── IncidentList.tsx
│   │   └── ReportIncidentForm.tsx
│   ├── App.tsx            # Main application component
│   ├── App.css            # Application-specific styling
│   ├── index.css          # Global styles (light/dark theme)
│   ├── main.tsx           # Application entry point
│   └── types.ts           # TypeScript types and interfaces
├── .gitignore
├── index.html             # HTML template with updated title
├── package.json           # Project configuration and dependencies
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## Design Decisions

- **In-Memory State**: Used React's `useState` to manage incidents without external APIs or databases, simplifying state management for demo purposes.
- **Functional Components & Hooks**: Leveraged `useMemo` for efficient filtering and sorting, and `useState` for component states.
- **Component Structure**: Broke down UI into small, reusable components (`FilterControls`, `SortControls`, `IncidentList`, `IncidentItem`, `ReportIncidentForm`) for separation of concerns and maintainability.
- **Styling**: Used CSS Grid and Flexbox for responsive layout, with hover effects and dark/light themes via CSS variables.

## Future Improvements

- Persist incidents to local storage or a backend API.
- Add user authentication and permissions.
- Implement pagination for large incident lists.
- Enhance accessibility (ARIA tags, keyboard navigation).

---

*This dashboard is a demonstration of a basic React & TypeScript project with state management and componentization.* 
