import { FileUpload} from "tavix";

export default function FileUploadCompnent() {
  return (
   <section className="flex flex-col gap-4">
      <h1 className="h1">File Upload Components</h1>
      <FileUpload
        accept="image/png,image/jpeg,.pdf"
        multiple
        helperText="Maximum file size is 10MB"
        title="Upload Images or PDF"
      />
      <FileUpload 
        accept=".pdf" 
        error="Please upload a PDF file"
        title="PDF Files Only"
      />
    </section>
  );
}
