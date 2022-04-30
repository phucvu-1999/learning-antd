import React, { useState } from "react";
import { Form, Input, Button } from "antd";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log(form.getFieldsValue());
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form form={form} layout="vertical" onFinish={onFinish} id="loginForm">
          <Form.Item name="username" label="Username">
            <Input placeholder="Please enter your username" />
          </Form.Item>

          <Form.Item name="password" label="Password">
            <Input.Password placeholder="Please enter your password" />
          </Form.Item>

          <Form.Item name="submitBtn" label="Submit">
            <Button htmlType="submit" form="loginForm"></Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
