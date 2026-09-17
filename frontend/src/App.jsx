import UploadSection from "./components/UploadSection";
function App() {
  return (
    <div className="container">
      <h1>DocFind</h1>
      <p>PDF Document Search</p>
      <UploadSection />
      <SearchBar />
    </div>
  );
}

export default App;
