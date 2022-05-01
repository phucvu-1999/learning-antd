import React, { useState, useEffect } from "react";
import { Table, Tag, Button } from "antd";
import { ColumnsType } from "antd/lib/table";

import { Student } from "./models/user";
import "antd/dist/antd.css";
import "./App.css";
import moment from "moment";

function App() {
  const [dataSource, setDataSource] = useState<Student[]>([
    {
      address: "John Adress",
      email: "john@gmail.com",
      id: 1,
      name: "John",
    },
    {
      address: "Bob Adress",
      email: "bob@gmail.com",
      id: 2,
      name: "Bob",
    },
    {
      address: "Lisa Adress",
      email: "lisa@gmail.com",
      id: 3,
      name: "Lisa",
    },
    {
      address: "Rose Adress",
      email: "rose@gmail.com",
      id: 4,
      name: "Rose",
    },
    {
      address: "Jisoo Adress",
      email: "jisoo@gmail.com",
      id: 5,
      name: "Jisoo",
    },
  ]);

  const columns: ColumnsType<Student> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "2",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "3",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "4",
    },
  ];

  const onAddNewStudent = () => {
    const randomNumber = Math.random() * 1000;
  };

  let duration = moment.duration(5, "days");
  duration = moment.duration(10, "M");
  console.log(duration.humanize());

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={onAddNewStudent}>Add a new student</Button>
        <Table dataSource={dataSource} rowKey="id" columns={columns} />
      </header>
    </div>
  );
}

export default App;
