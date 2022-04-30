import React, { useState } from "react";
import { Spin, Button } from "antd";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  const [spinning, setSpinning] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Spin spinning={spinning} />
        <Button onClick={() => setSpinning(!spinning)}>Toggle Spinning</Button>
      </header>
    </div>
  );
}

export default App;
