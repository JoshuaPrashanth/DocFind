function PdfViewer({selectedPdfs}){

  return(
    <div className="pdf-viewer-container">
      <h2>PDF Viewer</h2>
      <div className="pdf-info">
        <p><strong>Document:</strong>{selectedPdfs.pdfName}</p>
        <p><strong>Page:</strong>{selectedPdfs.pageNumber}</p>
      </div>

      <div className="pdf-placeholder">
        <iframe
          src={`http://localhost:3000/pdfs/${selectedPdfs.pdfName}#page=${selectedPdfs.pageNumber}`}
          title="Pdf-Viewer"
          className="Pdf-frame">

        </iframe>
      </div>
    </div>
  );
}

export default PdfViewer;

