import React from "react";

import Synonyms from "./Synonyms.js";

import "./css/Meaning.css";
import "./css/Media.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="mt-3 Meaning">
        <h2>{props.meaning.partOfSpeech}</h2>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">
                <strong>{definition.definition}</strong>
                <br />
                <small>{definition.example}</small>
                <div>
                  <Synonyms synonyms={props.meaning.synonyms} />
                </div>
              </div>
            </div>
          );
        })}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return null;
  }
}
