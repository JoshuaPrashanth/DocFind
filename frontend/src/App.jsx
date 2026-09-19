import UploadSection from "./components/UploadSection";
import SearchBar from "./components/SearchBar.jsx";
import SearchResults from "./components/SearchResults.jsx";

function App() {
  return (
    <div className="container">
      <h1>DocFind</h1>
      <p>PDF Document Search</p>

      <UploadSection />
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
