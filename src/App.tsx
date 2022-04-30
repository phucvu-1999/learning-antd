import React, { useState } from "react";
import { Form, Input, Button, message, Alert } from "antd";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  const [form] = Form.useForm();
  const [showAlert, setShowAlert] = useState(false);

  const onFinish = () => {
    console.log(form.getFieldsValue());
    setTimeout(() => {
      setShowAlert(true);
    }, 2000);
  };

  return (
    <div className="App">
      <header className="App-header">
        {showAlert && (
          <Alert
            type="error"
            description="Error login"
            message="Some thing went wrong"
          />
        )}
        <Form form={form} layout="vertical" onFinish={onFinish} id="loginForm">
          <Form.Item name="username" label="Username">
            <Input placeholder="Please enter your username" />
          </Form.Item>

          <Form.Item name="password" label="Password">
            <Input.Password placeholder="Please enter your password" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" form="loginForm">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
