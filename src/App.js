import React from "react";

import Dictionary from "./Dictionary";
import Footer from "./Footer";

import "./css/App.css";
import "./css/Media.css";

export default function App() {
  return (
    <div className="App">
      <div className="cointainer app-container">
        <header className="app-header">Online Dictionary</header>
        <main>
          <Dictionary defaultKeyWord="curiosity" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
