import React from "react";

import Phonetic from "./Phonetic";
import Meaning from "./Meaning.js";

import "./css/Results.css";
import "./css/Media.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="word">
          <h2>
            <strong>{props.results.word}</strong>
          </h2>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
