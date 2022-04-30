import React, { useState } from "react";
import { DatePicker } from "antd";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  const onMonthChange = (e: moment.Moment | null) => {
    console.log(e?.format("L"));
  };

  return (
    <div className="App">
      <header className="App-header">
        <DatePicker picker="month" format="MM/YYYY" onChange={onMonthChange} />
      </header>
    </div>
  );
}

export default App;
