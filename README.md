# Event Planning Portal

A lightweight task & event planning single-page application built with React. This project is a local-first demo app that lets users create, edit, prioritize, and track tasks — all persisted to browser localStorage. It includes a small auth abstraction, task management UI, filtering, and a responsive layout.

--- 

## Table of contents
- Project overview
- Features
- Tech stack & libraries
- Project structure
- Setup & run
- Development notes
- Data & persistence
- Testing
- Contributing
- License

---

## Project overview

This application helps organize tasks and events with priorities and due dates. It provides:
- A dashboard (Home) with quick access to tasks and stats
- A Task manager for creating, editing, completing, searching and filtering tasks
- A Profile page with account info and shortcuts to settings
- A Settings page to change theme, password, and delete account

The app is intentionally small and built to be easy to extend.

## Features
- Create, update and delete tasks
- Set task priority (high / medium / low) and optional due date
- Mark tasks complete / incomplete
- Filter tasks by status (All / Active / Completed), date (pick a date), and priority
- Search tasks by title or description
- Persist tasks per-user in localStorage
- Lightweight "auth" abstraction used by the demo hooks
- Tailwind-based responsive UI with dark mode support

## Tech stack & libraries

- React (v18)
- React Router DOM (routing)
- Tailwind CSS (utility-first styling)
- react-icons (icons)
- react-toastify (toasts)
- react-scripts (CRA tooling)
- web-vitals (performance metrics)
- Testing libraries: @testing-library/react, @testing-library/jest-dom, @testing-library/user-event

Dev dependencies:
- tailwindcss, postcss, autoprefixer

You can find these in `package.json`.

## Project structure (important files)

- `public/` — static assets and `index.html`
- `src/index.js` — app entry
- `src/index.css` — Tailwind + global styles
- `src/App.js` — main app routes
- `src/pages/` — page views (Home, Task, Profile, Settings, NotFound)
- `src/components/` — reusable components (Button, TaskModal, Sidebar, etc.)
- `src/hook/` — custom hooks (useAuth, useTasks, useGreeting)
- `src/utils/` — small services (taskService, authService) and helpers

## Setup & run (local)

Prerequisites:
- Node.js 18+ (or compatible)
- npm (bundled with Node) or yarn

Quick start:

1. Clone the repo:

   git clone <your-repo-url>
   cd ReactJs_template

2. Install dependencies:

   npm install

3. Run the development server:

   npm start

4. Build for production:

   npm run build

Notes:
- The app uses Create React App (`react-scripts`). The dev server runs at `http://localhost:3000` by default.
- Tailwind is configured via `tailwind.config.js` and PostCSS.

## Development notes

- Styles: the app relies on Tailwind utility classes (`src/index.css` imports Tailwind layers). If you change colors or tokens, update `tailwind.config.js` and `src/index.css`.
- Component style: a reusable `Button` component exists (`src/components/Button.js`) — prefer it for consistent UI.
- Local state: tasks are stored per-user in `localStorage` by `taskService` (`src/utils/task.js`). This makes it easy to test without a backend.
- Authentication: `useAuth` and `authService` provide a small demo auth layer. For a real backend, replace `authService` with API calls and adjust hooks.
- Date handling: dates are ISO strings in task objects (createdAt, updatedAt, dueDate).

## Data & persistence

- Tasks are persisted to `localStorage` under keys prefixed with `userTasks_` + user id.
- Task object shape (example):

```json
{
  "id": "165...xyz",
  "title": "My task",
  "description": "Details",
  "completed": false,
  "priority": "medium",
  "dueDate": "2025-12-01T00:00:00.000Z",
  "createdAt": "2025-11-01T12:34:56.789Z",
  "updatedAt": "2025-11-01T12:34:56.789Z"
}
```

## Testing

- The project includes React Testing Library in `devDependencies`. Run:

  npm test

This runs CRA's test runner. Add unit tests under `src/__tests__/` or next to components.

## Common tasks & tips
- Add a new component: create file in `src/components/`, export it, and import where needed.
- Add a helper: place in `src/utils/` and keep pure logic there.
- Persisted state: to reset all tasks for a user clear the browser's localStorage entry for `userTasks_<id>`.