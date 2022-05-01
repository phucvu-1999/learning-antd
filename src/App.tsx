import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import { ColumnsType } from "antd/lib/table";

import { Student } from "./models/user";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const columns: ColumnsType<Student> = [
    {
      title: "Student ID",
      dataIndex: "id",
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Student Grade",
      dataIndex: "grade",
      render: (value, record) => {
        const tagColor = record.grade.includes("A")
          ? "Green"
          : record.grade.includes("B")
          ? "Blue"
          : "Red";

        return (
          <Tag color={tagColor} key={record.grade}>
            {record.grade}
          </Tag>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Student 1",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Student 2",
      grade: "A",
    },
    {
      key: "3",
      id: 3,
      name: "Student 3",
      grade: "B",
    },
    {
      key: "4",
      id: 4,
      name: "Student 4",
      grade: "C",
    },
    {
      key: "5",
      id: 5,
      name: "Student 5",
      grade: "A",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Table
          columns={columns}
          dataSource={dataSource}
          rowSelection={{
            type: "checkbox",
            onSelect: (record, selected, selectedRow) => {
              console.log({ record, selected, selectedRow });
            },
            getCheckboxProps: (record) => ({
              disabled: record.grade === "C",
            }),
            selections: [
              Table.SELECTION_ALL,
              Table.SELECTION_NONE,
              Table.SELECTION_INVERT,
            ],
          }}
        />
      </header>
    </div>
  );
}

export default App;
