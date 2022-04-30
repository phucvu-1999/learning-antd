import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { SorterResult } from "antd/lib/table/interface";
import { TablePaginationConfig } from "antd";

import "antd/dist/antd.css";
import { User } from "./models/user";
import { Filter, Pagination, Sorter } from "./models/table";
import "./App.css";

function App() {
  const [dataSource, setDataSource] = useState<User[]>([]);

  useEffect(() => {
    getDataSource();
  }, []);

  const getDataSource = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data: User[] = await res.json();
    setDataSource(data);
  };

  const columns: ColumnsType<User> = [
    {
      title: "ID",
      dataIndex: "id",
      width: "40%",
      key: "1",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "User ID",
      dataIndex: "userId",
      width: "30%",
      key: "2",
      sorter: (a, b) => a.userId - b.userId,
    },
    {
      title: "Status",
      dataIndex: "completed",
      width: "30%",
      key: "3",
      filters: [
        { text: "Complete", value: true },
        { text: "In Progress", value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
      render: (value, record) => {
        return <span>{record.completed ? "Completed" : "In Progress"}</span>;
      },
    },
  ];

  const onTableChange = (
    _pagination: TablePaginationConfig,
    _filter: any,
    _sorter: SorterResult<User> | SorterResult<User>[]
  ) => {
    console.log({ _pagination, _filter, _sorter });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Table
          onChange={onTableChange}
          rowKey="id"
          dataSource={dataSource}
          columns={columns}
        />
      </header>
    </div>
  );
}

export default App;
