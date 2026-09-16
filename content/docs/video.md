# Video

Use the `Video` component to render a native HTML video element with sensible defaults and standard browser controls.

## Import Video

Import `Video` from Tavix:

```jsx
import { Video } from "tavix";
```

## Component API

```jsx
<Video
  src
  poster
  width
  height
  controls={true}
  autoPlay={false}
  muted={false}
  loop={false}
  playsInline={true}
  preload="metadata"
  className
  children
  ...props
/>
```

### Props

- `src`: URL of the video source.
- `poster`: Poster image displayed before playback starts.
- `width`: Width of the rendered video.
- `height`: Height of the rendered video.
- `controls`: Displays native browser controls when `true`.
- `autoPlay`: Enables autoplay behavior.
- `muted`: Starts the video muted.
- `loop`: Replays the video when ended.
- `playsInline`: Keeps inline playback behavior on mobile devices.
- `preload`: Native video preload strategy.
- `className`: Additional class names for the wrapper.
- `children`: Optional fallback children such as `<source>` tags.
- `...props`: Additional native video attributes.

## Behavior

- Wraps the native `<video>` element in a styled container.
- Preserves standard browser video behavior through native props.
- Accepts fallback `<source>` and track elements as children.
- Uses `playsInline` by default for mobile-friendly playback.

## Examples

### Basic video

```jsx
<Video src="/videos/demo.mp4" poster="/images/demo-poster.jpg" />
```

### Custom dimensions and autoplay

```jsx
<Video
  src="/videos/intro.mp4"
  poster="/images/intro-poster.jpg"
  width={960}
  height={540}
  autoPlay
  muted
  loop
/>
```

### With sources

```jsx
<Video src="/videos/highlights.mp4" controls>
  <source src="/videos/highlights.webm" type="video/webm" />
  <track kind="captions" srcLang="en" label="English captions" />
</Video>
```

## Notes

- This component is best for straightforward native video playback where you want the browser's built-in controls and semantics.
- For richer control surfaces, use `VideoPlayer` instead.
