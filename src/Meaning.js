import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className=" mt-5 Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.exemple}</em>
              <br />
              {definition.synonyms}
            </p>
          </div>
        );
      })}
      <h3>Synonyms:</h3>
      <p>{props.meaning.synonyms}</p>
    </div>
  );
}
