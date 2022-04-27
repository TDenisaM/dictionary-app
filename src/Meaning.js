import React from "react";

import Synonyms from "./Synonyms.js";

import "./Meaning.css";
import "./Media.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="mt-5 Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
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
