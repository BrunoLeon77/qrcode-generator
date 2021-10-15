import React, { useState } from "react";
import "./App.css";
import QRCodeCanvas from "./QRCodeCanvas";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <QRCodeCanvas text={text} />
    </div>
  );
}

export default App;
