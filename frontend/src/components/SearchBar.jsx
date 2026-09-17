import {useState} from "react";

function SearchBar(){

  const[value,setValue]=useState("");
  const[message,setMessage]=useState("");

  const currentState = ()=>{
    if(value==""){
      return setMessage("SearchBar was empty");
    }
    return setMessage("");
  }

  return(
    <div className="search-bar-component">

      <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={(e)=>{setValue(e.target.value)}}
      />

      <button className="search-button"
      onClick={currentState}>
        Search
      </button>

      {message}
    </div>
  );
}

export default SearchBar;