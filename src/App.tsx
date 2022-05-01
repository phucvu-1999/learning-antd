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

  // The same
  // console.log("comparision: ", moment("2022/04/30").isSame("2022/04/30"));

  // Before
  // console.log(
  //   moment("2022/04/30 12:23:25").isBefore("2022/04/30 12:30:30", "years")
  // );

  // The same or after
  // console.log(moment("2022/04/30").isSameOrAfter("2020/04/30"));

  // Is between
  const m1 = moment("2020/04/28");
  const m2 = moment("2020/04/29");
  const m3 = moment("2020/04/30");

  // console.log(m2.isBetween(m1, m3));

  // Check if certain object is a moment object;
  console.log(moment.isMoment(m1));

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
