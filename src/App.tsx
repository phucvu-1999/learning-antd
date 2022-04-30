import React, { useState, useRef, RefObject } from "react";
import { Select } from "antd";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  const favoriteFruits = ["Bananna", "Coconut", "Orange", "Water Melon"];
  const { Option } = Select;

  const onChange = (e: HTMLSelectElement) => {
    console.log(e);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Select
          mode="multiple"
          maxTagCount={2}
          placeholder="Select your favorite fruit"
          onChange={onChange}
        >
          {favoriteFruits.map((favoriteFruit, index) => (
            <Option value={favoriteFruit} key={index}>
              {favoriteFruit}
            </Option>
          ))}
        </Select>
      </header>
    </div>
  );
}

export default App;
