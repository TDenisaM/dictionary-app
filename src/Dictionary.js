import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <p>What word do you want to look up?</p>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="type a word...."
          autoComplete="off"
          autoCapitalize="on"
          onChange={handleKeyWordChange}
        />
        <input type="submit" placeholder="Search" />
      </form>
    </div>
  );
}
