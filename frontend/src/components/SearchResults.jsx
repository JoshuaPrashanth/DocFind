import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchResults.css";

function SearchResults({ matchedPdfs, setSelectedPdfs }) {
  return (
    <div id="searchResults_container">
      {matchedPdfs.length ? (
        matchedPdfs.map((matchedPdf, i) => {
          const cleanName = matchedPdf.pdfName.replace(/\.pdf$/i, "");
          return (
            <div className="preview_container" key={i}>
              <div className="preview_icon">
                <FontAwesomeIcon icon={faFilePdf} />
              </div>

              <div className="preview_container_left">
                <h4 className="searchResults_pdfName">{cleanName}</h4>
                <p className="searchResults_page">
                  Page {matchedPdf.pageNumber}
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
        <p className="searchResults_empty">No Results Found</p>
      )}
    </div>
  );
}

export default SearchResults;
