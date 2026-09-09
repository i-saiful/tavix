# React Installation Guide

## Create Vite project

```bash
npm create vite@latest
```

## Install dependencies

```bash
npm i tavix react-router
```

## Folder structure

```text
src/
├── App.jsx
├── Layout.jsx
├── Providers.jsx
├── Router.jsx
└── main.jsx
```

## Router.jsx

```jsx
import { ROUTES } from "@/constants";
import Layout from "./Layout";
import { Routes, Route } from "react-router";
import Page from "@/pages";

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

## Providers.jsx

```jsx
import { BrowserRouter } from "react-router";
import { TavixProvider } from "tavix/providers";

export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <TavixProvider>{children}</TavixProvider>
    </BrowserRouter>
  );
}
```

## Layout.jsx

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

## App.jsx

```jsx
import "tavix/css";
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

## Notes

- Use `tavix/css` for the global Tavix styles.
- Wrap your app with `TavixProvider` through `Providers.jsx`.
- Use `BrowserRouter` from `react-router` to support routing in the app.
