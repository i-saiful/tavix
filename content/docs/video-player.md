# Video Player

Use the `VideoPlayer` component for a richer media experience with play/pause controls, volume, fullscreen, skip, and playback-speed controls.

## Import Video Player

Import `VideoPlayer` from Tavix:

```jsx
import { VideoPlayer } from "tavix";
```

## Component API

```jsx
<VideoPlayer
  src
  poster
  width
  height
  autoPlay={false}
  muted={false}
  loop={false}
  playsInline={true}
  preload="metadata"
  className
  ...props
/>
```

### Props

- `src`: Video source URL.
- `poster`: Optional poster image.
- `width`: Video width.
- `height`: Video height.
- `autoPlay`: Starts playback automatically when the media is ready.
- `muted`: Starts the video muted.
- `loop`: Replays the video when it ends.
- `playsInline`: Keeps playback inline on mobile devices.
- `preload`: Browser preloading behavior.
- `className`: Additional class names on the player wrapper.
- `...props`: Additional native video attributes passed to the actual `<video>` element.

## Behavior

- Provides a custom control bar with play, pause, mute, fast-forward, rewind, fullscreen, and speed controls.
- Tracks the current playback time and total duration.
- Updates the progress bar as the video plays.
- Allows users to scrub through the timeline using a range slider.
- Supports playback speed changes from `0.25x` to `2x` in increments.
- Uses accessible button labels and `aria-pressed`, `aria-expanded`, and `aria-label` attributes.
- Toggles fullscreen via the browser fullscreen API.
- Closes the speed menu when the user clicks outside of it.

## Examples

### Basic player

```jsx
<VideoPlayer src="/videos/demo.mp4" poster="/images/demo-poster.jpg" />
```

### Custom size

```jsx
<VideoPlayer
  src="/videos/lesson.mp4"
  poster="/images/lesson-poster.jpg"
  width={1280}
  height={720}
  autoPlay
  muted
/>
```

### Inline player

```jsx
<VideoPlayer
  src="/videos/product-tour.mp4"
  playsInline
  preload="auto"
/>
```

## Notes

- `VideoPlayer` is intended when you need a more polished video experience than the native browser controls.
- It preserves the underlying HTML video element behavior while adding a UI layer for richer interactivity.
