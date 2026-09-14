# Next.js Installation Guide

Add Tavix to a Next.js application with the steps below.

## Create Next.js project

Create a new Next.js project if you do not already have one.

```bash
npx create-next-app@latest
```

## Install Tavix

Install Tavix from npm.

```bash
npm i tavix
```

## Configure Tavix

Import Tavix's CSS and wrap your application with `TavixProvider` in `app/layout.jsx`.

```js
import "tavix/css";
import "./globals.css";
import { TavixProvider } from "tavix/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TavixProvider>{children}</TavixProvider>
      </body>
    </html>
  );
}
```

## Start the app

Run the development server to view your application.

```bash
npm run dev
```
