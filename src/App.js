import React from "react";

import Dictionary from "./Dictionary";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="cointainer">
        <header className="App-header">Online Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <Footer />
      </div>
    </div>
  );
}
