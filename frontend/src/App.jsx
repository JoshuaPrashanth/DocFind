
import UploadSection from "./components/UploadSection";
import SearchBar from "./components/SearchBar.jsx";
import PdfViewer from "./components/PdfViewer.jsx";

function App() {
  return (
    <div className="container">
      <h1>DocFind</h1>
      <p>PDF Document Search</p>
    
      <UploadSection />
      <SearchBar />
      <PdfViewer 
        DocumentName="REPORT.pdf"
        PageNo={4}
      />
    </div>
  );
}

export default App;
