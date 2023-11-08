import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import axios from "axios";

const DataGridComponent = () => {

  const [users, setUsers] = useState([]);

  const columns = [
    { field: "userId", headerName: "User ID", width: 100 },
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "completed", headerName: "Completed", width: 100 },
  ];
  
  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(response => {
        setUsers(response.data)
    })
    .catch(error => {
        console.error("Veri bulunamadı veya işlenemedi! Hata: ", error);
    });
  },[]);

  const data = {
    rows: users,
    columns,
    pageSize: 5,
    pageSizeOptions: [5, 10, 25,50,100],
    pagination: true,
  };

  return (
      <div style={{ height: 500, width: "%100" }}>
        <DataGrid {...data} />
      </div>
  );
};

export default DataGridComponent;