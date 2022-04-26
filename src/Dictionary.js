import React, { useState } from "react";
import axios from "axios";

import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
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
      <Results results={results} />
    </div>
  );
}
