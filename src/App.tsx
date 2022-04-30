import React, { useState, useRef, RefObject } from "react";
import { Input, Button, InputRef } from "antd";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  const onFocusInput = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <Input name="antInput" placeholder="name" />
        <Button onClick={onFocusInput}>Focus input</Button>
      </header>
    </div>
  );
}

export default App;
