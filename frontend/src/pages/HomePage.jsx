import {useState} from "react";
import UploadSection from "../components/UploadSection.jsx";
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import PdfViewer from "../components/PdfViewer.jsx";

function HomePage() {
  const [matchedPdfs,setMatchedPdfs]=useState([]);

  return (
    <div className="container">
      <h1>DocFind</h1>
      <p>PDF Document Search</p>
      <UploadSection />
      <SearchBar setMatchedPdfs={setMatchedPdfs}/>
      <SearchResults matchedPdfs={matchedPdfs}/>
      <PdfViewer DocumentName="REPORT.pdf" PageNo={4} />
    </div>
  );
}
export default HomePage;
