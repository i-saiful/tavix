# Carousel

A slide carousel for presenting related content one panel at a time. It supports optional navigation arrows, indicators, looping, controlled slide position, and loading state.

## Import Carousel

Import `Carousel` from Tavix:

```jsx
import { Carousel } from "tavix";
```

## Component API

```jsx
<Carousel
  activeIndex
  defaultIndex={0}
  onChange
  loop={true}
  showArrows={true}
  showIndicators={false}
  loading={false}
  className=""
>
  {children}
</Carousel>
```

### Props

- `children`: Slide elements rendered by the carousel.
- `activeIndex`: Controlled index of the currently visible slide.
- `defaultIndex`: Initial slide index for uncontrolled usage. Defaults to `0`.
- `onChange`: Callback called when the active slide changes.
- `loop`: Allows navigation to wrap from the last slide to the first and back. Defaults to `true`.
- `showArrows`: Displays previous and next navigation arrows. Defaults to `true`.
- `showIndicators`: Displays slide indicators. Defaults to `false`.
- `loading`: Displays the loading state. Defaults to `false`.
- `className`: Additional classes applied to the carousel. Defaults to `""`.

## Behavior

- Displays one slide at a time.
- Supports controlled slide position through `activeIndex` and `onChange`.
- Supports uncontrolled slide position through `defaultIndex`.
- Calls `onChange` when navigation changes the active slide.
- Displays previous and next arrows when `showArrows` is `true`.
- Displays indicators when `showIndicators` is `true`.
- Wraps navigation at the ends when `loop` is `true`.
- Stops arrows at the first and last slides when `loop` is `false`.
- Displays `aria-current` on the active indicator.
- Exposes region and slide ARIA descriptions.
- Exposes `aria-busy` while `loading` is `true`.

## Examples

### Basic carousel

```jsx
<Carousel showIndicators onChange={setIndex}>
  {images.map((image) => (
    <img key={image.id} src={image.src} alt={image.alt} />
  ))}
</Carousel>
```

### Controlled carousel

```jsx
const [activeIndex, setActiveIndex] = useState(0);

<Carousel
  activeIndex={activeIndex}
  onChange={setActiveIndex}
  showIndicators
>
  <img src="/slides/one.jpg" alt="First product view" />
  <img src="/slides/two.jpg" alt="Second product view" />
</Carousel>;
```

### Uncontrolled carousel

Use `defaultIndex` when the carousel should manage its own slide position after an initial slide:

```jsx
<Carousel defaultIndex={1}>
  <article>Overview</article>
  <article>Details</article>
  <article>Specifications</article>
</Carousel>;
```

### Non-looping carousel

```jsx
<Carousel
  loop={false}
  showArrows
  showIndicators
>
  <article>Step one</article>
  <article>Step two</article>
  <article>Step three</article>
</Carousel>;
```

### Loading carousel

```jsx
<Carousel loading>
  {slides}
</Carousel>;
```

Use `loading` while slide content is being fetched or prepared. The carousel exposes `aria-busy` during this state.

## Accessibility

- The carousel exposes region and slide descriptions for assistive technology.
- Indicators expose the current slide through `aria-current`.
- The carousel exposes `aria-busy` while loading.
- Provide meaningful `alt` text when slides contain images.
- Keep slide content focused and avoid placing too many unrelated items in one carousel.
- Keep navigation arrows and indicators available when users need to move between slides.

## Notes

- Use `activeIndex` with `onChange` for controlled usage.
- Use `defaultIndex` for uncontrolled usage with an initial slide.
- `loop={false}` prevents navigation from wrapping at the boundaries.
- `showArrows` defaults to `true`; `showIndicators` defaults to `false`.
- The carousel does not change or manage the content passed through `children`.