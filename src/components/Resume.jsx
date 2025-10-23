import resume from "../assets/Devin_Liu_Resume_2025.pdf"
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="pt-20 flex justify-center w-screen">
      <Document file={resume} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
        {/* Always just show page 1 */}
        <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} width={Math.min(window.innerWidth, 1200)}/>
      </Document>
    </div>
  );
};

export default Resume;
