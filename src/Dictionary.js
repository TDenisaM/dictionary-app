import React, { useState } from "react";
import axios from "axios";

import Results from "./Results.js";
import Photos from "./Photos.js";
import "./css/Dictionary.css";
import "./css/Media.css";

export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    //documentation from pexel.com
    let pexelApiKey =
      "563492ad6f917000010000013613a3c8c53a4db39f4a908ecde24097";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
