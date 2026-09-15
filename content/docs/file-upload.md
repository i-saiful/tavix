# FileUpload

A file input with a styled dropzone, native file selection, and drag-and-drop support. Use it for single or multiple file uploads.

## Import FileUpload

Import `FileUpload` from Tavix:

```jsx
import { FileUpload } from "tavix";
```

## Component API

```jsx
<FileUpload
  accept
  multiple={false}
  disabled={false}
  error
  helperText
  title="Click to upload or drag and drop"
  onChange
  className
  {...props}
/>
```

### Props

- `accept`: File types accepted by the browser, such as `image/*`, `.pdf`, or `image/png,image/jpeg`.
- `multiple`: Allows selecting or dropping multiple files when `true`. Defaults to `false`.
- `disabled`: Prevents file selection and dropping when `true`. Defaults to `false`.
- `error`: Validation message displayed below the dropzone.
- `helperText`: Supporting text displayed when there is no `error`.
- `title`: Primary text displayed inside the dropzone. Defaults to `Click to upload or drag and drop`.
- `onChange`: Callback called when files are selected or dropped.
- `className`: Additional classes applied to the dropzone.
- `...props`: Additional native file input attributes and event handlers.

## Behavior

- Renders a styled dropzone backed by a hidden native file input.
- Opens the native file picker when the dropzone is clicked.
- Accepts files dragged over and dropped onto the dropzone.
- Applies `accept` to the underlying native file input.
- Allows one file by default and multiple files when `multiple` is `true`.
- Forwards native file selection events to `onChange`.
- Converts dropped files into an `onChange` call with a `{ target: { files } }` shape.
- Displays `error` instead of `helperText` when both are provided.
- Prevents selection and dropping when `disabled` is `true`.

## Examples

### Basic file upload

```jsx
<FileUpload
  onChange={(event) => {
    const [file] = event.target.files;
    setFile(file);
  }}
/>
```

### Image upload

```jsx
<FileUpload
  accept="image/png,image/jpeg"
  title="Upload a profile image"
  helperText="PNG or JPG up to 5 MB"
  onChange={(event) => {
    const [file] = event.target.files;
    setProfileImage(file);
  }}
/>;
```

### Multiple files

```jsx
<FileUpload
  accept="image/*"
  multiple
  title="Upload product images"
  onChange={(event) => {
    setFiles(Array.from(event.target.files));
  }}
/>;
```

### Restrict file types

Use an extension, MIME type, or a comma-separated list of accepted types:

```jsx
<FileUpload
  accept=".pdf,.doc,.docx"
  title="Upload a document"
  onChange={(event) => {
    setDocument(event.target.files[0]);
  }}
/>;
```

### Error and disabled states

```jsx
<FileUpload
  accept="image/*"
  error="Please upload an image smaller than 5 MB."
  onChange={handleChange}
/>;

<FileUpload
  title="Uploads unavailable"
  disabled
  onChange={handleChange}
/>;
```

## Change events

Native file selection forwards the browser input event:

```jsx
<FileUpload
  onChange={(event) => {
    const files = event.target.files;
    console.log(files);
  }}
/>;
```

Dropping files calls `onChange` with an object containing the selected files:

```jsx
onChange({ target: { files } });
```

Both interactions expose the selected files through `event.target.files`.

## Accessibility

- The dropzone acts as a label for the hidden native file input.
- Use a descriptive `title` so the upload action is clear.
- Use `helperText` to explain accepted formats or size limits.
- Use `error` to communicate validation feedback.
- Keep the native file input enabled unless the user cannot upload files.
- Do not rely on drag and drop alone; the click-to-select interaction remains available.

## Notes

- FileUpload does not manage uploaded files or upload progress; handle files in `onChange`.
- `accept` guides the browser file picker but should not replace server-side file validation.
- Use `multiple` when the receiving code expects more than one file.
- `...props` are forwarded to the native file input.
- The dropzone is implemented with a label connected to the hidden native file input.