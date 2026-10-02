import { useState } from "react";

function SearchBar() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  async function sendSearchWord(keyWord) {
    await fetch("http://localhost:3000/api/search", {
      method: "POST",
      body: keyWord,
    });
    console.log("KeyWord Sent Successfully!!");
  }

  const currentState = () => {
    if (value == "") {
      return setMessage("Enter any Search Keyword");
    }
    sendSearchWord(value);
    return setMessage("");
  };

  return (
    <div className="search-bar-component">
      <input
        type="text"
        placeholder="Enter the Search Keyword..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button className="search-button" onClick={currentState}>
        Search
      </button>

      {message}
    </div>
  );
}

export default SearchBar;
