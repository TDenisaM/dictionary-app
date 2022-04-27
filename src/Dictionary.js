import React, { useState } from "react";
import axios from "axios";

import Results from "./Results.js";
import "./Dictionary.css";
import "./Media.css";

export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    //documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="engine">
          <p>What word do you want to look up?</p>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="search"
              placeholder="type a word...."
              autoComplete="off"
              autoCapitalize="on"
              onChange={handleKeyWordChange}
            />
            <button type="submit" class="btn btn-light mb-3">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="hint">
            sugested words: sunrise, dress, blue, carrier, dog, nature....
          </div>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
