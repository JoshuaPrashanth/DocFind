import { useState } from "react";
import UploadSection from "../components/UploadSection.jsx";
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import PdfViewer from "../components/PdfViewer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDochub } from "@fortawesome/free-brands-svg-icons";
import "../styles/HomePage.css";

function HomePage() {
  const [matchedPdfs, setMatchedPdfs] = useState([]);
  const [selectedPdfs, setSelectedPdfs] = useState(null);

  return (
    <div className="home">
      <div className="home_header">
        <FontAwesomeIcon className="home_logo" icon={faDochub} />
        <h1>DocFind</h1>
        <p>Your Library</p>
      </div>

      <div className="home_body">
        <aside className="home_left">
          <UploadSection />
          <SearchBar setMatchedPdfs={setMatchedPdfs} />
          <SearchResults
            matchedPdfs={matchedPdfs}
            setSelectedPdfs={setSelectedPdfs}
          />
        </aside>

        <main className="home_right">
          {selectedPdfs ? (
            <PdfViewer selectedPdfs={selectedPdfs} />
          ) : (
            <div className="home_preview_empty">
              <div className="home_preview_icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M9 13h6" />
                  <path d="M9 17h4" />
                </svg>
              </div>
              <p>Select a document to preview</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default HomePage;
