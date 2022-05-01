import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import {
  AppleFilled,
  LoadingOutlined,
  PieChartFilled,
  BankTwoTone,
} from "@ant-design/icons";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppleFilled style={{ color: "rebeccapurple", fontSize: 100 }} />
        <PieChartFilled style={{ color: "orange", fontSize: 100 }} />
        <LoadingOutlined style={{ color: "green", fontSize: 100 }} />
        <PieChartFilled rotate={45} style={{ color: "blue", fontSize: 100 }} />
        <BankTwoTone twoToneColor={"green"} style={{ fontSize: 100 }} />
      </header>
    </div>
  );
}

export default App;
