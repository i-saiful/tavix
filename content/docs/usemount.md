# useMount

Use the `useMount` hook for one-time initialization logic that should run as soon as a component mounts.

## `useMount` Hook

Import `useMount` from Tavix hooks:

```jsx
import { useMount } from "tavix/hooks";
```

### Usage example

```jsx
"use client";

import { useMount } from "tavix/hooks";

export default function AnalyticsTracker() {
  useMount(() => {
    console.log("Component mounted");

    return () => {
      console.log("Cleanup on unmount");
    };
  });

  return <div>Ready</div>;
}
```

The hook accepts a function that runs once after mount:

```jsx
useMount(() => {
  const timer = setTimeout(() => {
    console.log("Initialized");
  }, 100);

  return () => clearTimeout(timer);
});
```

## Behavior

- Runs the supplied effect once after the component mounts.
- Runs the effect only on the first mount, even if the component re-renders.
- Supports cleanup logic by returning a function from the effect.
- Uses the same lifecycle pattern as `useEffect`, but is intended for initialization that should happen only once.
- Is useful for analytics setup, initial data loading, or one-time subscription logic.

## When to use it

Use `useMount` when you need initialization logic that should not re-run on every render, such as:

- sending a one-time analytics event
- registering a subscription or listener
- starting a background task only once
- setting up a non-reactive initial state

## When not to use it

Use a normal `useEffect` instead when the logic depends on changing props, state, or data. `useMount` is intentionally for one-time setup, not reactive updates.

## Notes

- The hook is designed for mount-only logic, not for state-driven side effects.
- If your effect needs to respond to values that change over time, prefer `useEffect` with the proper dependencies.
- The cleanup function is still honored when the component unmounts.
