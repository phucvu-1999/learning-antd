import React, { useState } from "react";
import { Progress } from "antd";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Progress percent={50} />
        <Progress percent={50} status="active" />
        <Progress percent={50} type="circle" status="success" />
        <Progress percent={50} status="exception" type="dashboard" />
        <Progress
          percent={50}
          type="circle"
          trailColor="red"
          strokeColor="orange"
          status="active"
        />
      </header>
    </div>
  );
}

export default App;
