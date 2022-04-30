import React, { useState } from "react";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  const onBtnClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          block
          onClick={onBtnClick}
          loading={loading}
        >
          Add new
        </Button>
      </header>
    </div>
  );
}

export default App;
