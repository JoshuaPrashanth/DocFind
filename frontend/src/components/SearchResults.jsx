function SearchResults({ matchedPdfs,setSelectedPdfs }) {

  
  return (
    <div id="searchResults_container">
      {matchedPdfs.length ? (
        matchedPdfs.map((matchedPdf, i) => {
          return (
            <div className="preview_container" key={i}>
              <div className="preview_container_left">
                <h4 className="searchResults_pdfName">
                  PDF name: {matchedPdf.pdfName}
                </h4>
                <p className="searchResults_pdfName">
                  Page no: {matchedPdf.pageNumber}
                </p>
              </div>
              <button
                className="preview_button"
                onClick={() => {
                  setSelectedPdfs(matchedPdf);
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
