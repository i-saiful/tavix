# File Preview

Use the `FilePreview` component to show uploaded files, preview media when available, and expose quick actions such as preview, download, and remove.

## Import File Preview

Import `FilePreview` from Tavix:

```jsx
import { FilePreview } from "tavix";
```

## Component API

```jsx
<FilePreview
  file
  files
  groupByStatus={false}
  showGroupLabels={true}
  statusOrder={['uploading', 'error', 'success', 'default']}
  statusLabels
  showGroupCount={true}
  emptyMessage
  listClassName
  className
  showSize={true}
  showType={true}
  showDownload={true}
  showRemove={true}
  onPreview
  onDownload
  onRemove
  progress={0}
  status="default"
/>
```

### Props

- `file`: Single file object used when `files` is not provided.
- `files`: Array of file objects. When passed, the component renders a list of previews.
- `groupByStatus`: Groups files by upload status when `files` is an array.
- `showGroupLabels`: Displays section labels for grouped file statuses.
- `statusOrder`: Ordered list of status groups used for grouping.
- `statusLabels`: Optional custom labels for each status.
- `showGroupCount`: Shows the number of files in each group.
- `emptyMessage`: Message shown when a grouped list has no items.
- `listClassName`: Extra class for the grouped list wrapper.
- `className`: Additional class for the root item.
- `showSize`: Displays the file size when available.
- `showType`: Displays the detected file type.
- `showDownload`: Shows the download action when a file has a URL.
- `showRemove`: Shows the remove action when a callback is supplied.
- `onPreview`: Custom preview handler.
- `onDownload`: Custom download handler.
- `onRemove`: Callback fired when the remove button is clicked.
- `progress`: Upload progress percentage for `uploading` files.
- `status`: Status for a single file item. Supported values are `uploading`, `error`, `success`, and `default`.

## Behavior

- Detects the file type by extension or MIME-like metadata.
- Renders an image preview when the file is an image and has a valid URL.
- Opens non-image files in a new tab when preview is requested.
- Shows a download button only for successful file items with a URL.
- Shows a progress bar when the file status is `uploading`.
- Shows a failure label for `error` status items.
- Displays a preview action for images, PDFs, and media files with accessible labels.
- Uses semantic status labels and accessible button names for each action.

## Examples

### Single file

```jsx
const file = {
  name: "report.pdf",
  url: "/files/report.pdf",
  size: 214000,
};

<FilePreview file={file} />;
```

### Upload states

```jsx
<FilePreview
  file={{
    name: "avatar.png",
    url: "/images/avatar.png",
    size: 84500,
  }}
  status="success"
/>

<FilePreview
  file={{
    name: "invoice.pdf",
    size: 123000,
  }}
  status="uploading"
  progress={72}
/>

<FilePreview
  file={{
    name: "logo.svg",
    size: 4600,
  }}
  status="error"
/>
```

### Multiple files with grouped statuses

```jsx
const files = [
  {
    name: "cover.jpg",
    url: "/images/cover.jpg",
    size: 420000,
  },
  {
    name: "notes.pdf",
    url: "/files/notes.pdf",
    size: 160000,
  },
  {
    name: "demo.mp4",
    url: "/videos/demo.mp4",
    size: 3890000,
  },
];

<FilePreview
  files={files}
  groupByStatus
  showGroupLabels
  statusLabels={{
    success: "Completed",
    uploading: "Uploading",
    error: "Failed",
    default: "Files",
  }}
  onRemove={(file) => console.log("Remove", file.name)}
/>;
```

## Notes

- The component works with a single file or a file array.
- It is designed for uploaded media and document previews in dashboard and content workflows.
- When no custom handlers are passed, the component falls back to browser-based preview and download behavior.
