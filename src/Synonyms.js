import React from "react";

import "./css/Synonyms.css";
import "./css/Media.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonym:</strong>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym} </li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
