import React from "react";

import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <span>
        {" "}
        Coded by{" "}
        <a
          href="https://mellifluous-jelly-540b2e.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Denisa M. Tudor{" "}
        </a>
      </span>
      <span>
        (open-source on
        <a
          href="https://github.com/TDenisaM/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>
      </span>
      <span>
        and hosted on
        <a
          href="https://jazzy-pothos-61b570.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
        )
      </span>
    </footer>
  );
}
