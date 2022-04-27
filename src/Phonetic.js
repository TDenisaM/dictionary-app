import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i class="fa-solid fa-volume-low fa-2x"></i>
      </a>
      {"      "}
      {"      "}
      <span className="align-middle">{props.phonetic.text}</span>
    </div>
  );
}
