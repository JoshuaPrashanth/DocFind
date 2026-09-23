import UploadSection from "../components/UploadSection.jsx";
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import PdfViewer from "../components/PdfViewer.jsx";
import BackendStatus from "../components/BackendStatus.jsx";

function HomePage() {
  return (
    <div className="container">
      <h1>DocFind</h1>
      <p>PDF Document Search</p>
      <UploadSection />
      <SearchBar />
      <SearchResults />
      <PdfViewer DocumentName="REPORT.pdf" PageNo={4} />
      <BackendStatus />
    </div>
  );
}
export default HomePage;


