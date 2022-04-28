import React from "react";

import Synonyms from "./Synonyms.js";

import "./css/Meaning.css";
import "./css/Media.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="mt-3 Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <strong>Exemples: </strong>
              <em>{definition.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
