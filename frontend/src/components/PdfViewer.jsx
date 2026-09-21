function PdfViewer({DocumentName,PageNo}){

  return(
    <div className="pdf-viewer-container">
      <h2>PDF Viewer</h2>
      <div className="pdf-info">
        <p><strong>Document:</strong>{DocumentName}</p>
        <p><strong>Page:</strong>{PageNo}</p>
      </div>

      <div className="pdf-placeholder">
        <iframe
          src={`/pdfs/${DocumentName}#page=${PageNo}`}
          title="Pdf-Viewer"
          className="Pdf-frame">

        </iframe>
      </div>
    </div>
  );
}

export default PdfViewer;

