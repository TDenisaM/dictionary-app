import React from "react";

import "./css/Phonetic.css";
import "./css/Media.css";

export default function Phonetic(props) {
  return (
    <div className="align-middle Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i className="fa-solid fa-volume-low fa-2x listen"></i>
      </a>
      {"      "}
      {"      "}
      <h2 className="align-middle">{props.phonetic.text}</h2>
    </div>
  );
}
