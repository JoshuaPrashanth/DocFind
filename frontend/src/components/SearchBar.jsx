import { useState } from "react";
import { searchKeyword } from "../Services/api.jsx";
import "../styles/SearchBar.css";

function SearchBar({ setMatchedPdfs }) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  async function sendSearchWord(keyWord) {
    try {
      const data = await searchKeyword(keyWord);
      console.log(data);
      setMatchedPdfs(data);
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  }

  const currentState = () => {
    if (value == "") {
      return setMessage("Enter any Search Keyword");
    }
    sendSearchWord(value);
    return setMessage("");
  };

  return (
    <div className="search_wrapper">
      <div className="search-bar-component">
        <input
          type="text"
          placeholder="Enter the Search Keyword..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-button" onClick={currentState}>
          Search
        </button>
      </div>
      {message && <p className="search-message">{message}</p>}
    </div>
  );
}

export default SearchBar;
