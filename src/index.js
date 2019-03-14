import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <footer className="footer">
      <p>Footer</p>
    </footer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
