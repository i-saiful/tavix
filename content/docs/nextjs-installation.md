# Next.js Installation Guide

## Create Next.js project

```bash
npx create-next-app@latest
```

## Install Tavix

```bash
npm i tavix
```

## Import CSS and Providers

Add Tavix CSS and providers in your app entry file.

```js
import "tavix/css";
// import "./globals.css";
import { TavixProvider } from "tavix/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TavixProviders>{children}</TavixProviders>
      </body>
    </html>
  );
}
```

If your project structure requires it, place the CSS import in your global stylesheet or app entry file and wrap your app with the providers component.
