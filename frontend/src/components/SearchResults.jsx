function SearchResults() {
  const matchedPdfs = [
    { pdf_name: "AI technology", page_no: 23 },
    { pdf_name: "Analysis and design of algorithm", page_no: 42 },
    { pdf_name: "Computer Networks", page_no: 54 },
    { pdf_name: "Database Management Systems", page_no: 76 },
  ];
  //   const matchedPdfs = [];
  return (
    <div id="searchResults_container">
      {matchedPdfs.length ? (
        matchedPdfs.map((matchedPdf, i) => {
          return (
            <div className="preview_container" key={i}>
              <div className="preview_container_left">
                <h4 className="searchResults_pdfName">
                  PDF name: {matchedPdf.pdf_name}
                </h4>
                <p className="searchResults_pdfName">
                  Page no: {matchedPdf.page_no}
                </p>
              </div>
              <button
                className="preview_button"
                onClick={() => {
                  console.log(i);
                }}
              >
                Preview
              </button>
            </div>
          );
        })
      ) : (
        <p>No Results Found</p>
      )}
    </div>
  );
}
export default SearchResults;
