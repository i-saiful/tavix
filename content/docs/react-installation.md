# React Installation Guide

This guide shows how to add Tavix to a React application created with Vite. Start with the basic setup, then add `react-router` when your application needs multiple pages.

## Create Vite project

Start with a new Vite application if you do not already have a React project ready.

```bash
npm create vite@latest
```

## Install Tavix

Install Tavix in your Vite project.

```bash
npm i tavix
```

## Basic setup

Import Tavix's CSS in `main.jsx` and wrap your application with `TavixProvider`.

### main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "tavix/css";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### App.jsx

Render a Tavix component inside the provider to confirm that the setup is working.

```jsx
import { TavixProvider } from "tavix/provider";
import { Button } from "tavix";

function App() {
  return (
    <TavixProvider>
      <main className="flex justify-center items-center h-screen">
        <Button className="btn btn-primary">Click Me</Button>
      </main>
    </TavixProvider>
  );
}

export default App;
```

## Add React Router

For applications with multiple pages, install `react-router` and move the router and provider setup into separate files.

```bash
npm i react-router
```

### Folder structure

This structure separates routing, shared providers, and the application layout.

```text
src/
├── App.jsx
├── Layout.jsx
├── Providers.jsx
├── Router.jsx
└── main.jsx
```

### Update App.jsx

Render the router inside the shared providers.

```jsx
import Router from "./Router";
import Providers from "./Providers";

export default function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}
```

### Router.jsx

Define your routes inside the shared layout. The `Outlet` in `Layout.jsx` renders the page matched by the current route.

```jsx
import { ROUTES } from "@/constants";
import Layout from "./Layout";
import { Routes, Route } from "react-router";
import Page from "@/pages/HomePage";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Page />} />
      </Route>
    </Routes>
  );
}
```

### Providers.jsx

Wrap the application with `BrowserRouter` for navigation and `TavixProvider` for Tavix context.

```jsx
import { BrowserRouter } from "react-router";
import { TavixProvider } from "tavix/provider";

export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <TavixProvider>{children}</TavixProvider>
    </BrowserRouter>
  );
}
```

### Layout.jsx

Keep shared UI visible while nested route content is rendered through `Outlet`.

```jsx
import { Outlet } from "react-router";
import { Sidebar } from "@/components";

export default function Layout() {
  return (
    <main className="flex">
      <Sidebar />
      <Outlet />
    </main>
  );
}
```

## Notes

- Import `tavix/css` once in `main.jsx`.
- Use the basic setup when your app does not need routing.
- Add `BrowserRouter` and route components when your app has multiple pages.

Start the development server after setup:

```bash
npm run dev
```
