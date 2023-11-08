import React from "react";
import DataGridComponent from "./DataGridComponent";

const App = () => {
  return (
    <div className="App">
    <h1 style={{textAlign: "center"}}>Material UI DataGrid Projesi</h1>
    <div style={{ margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}>
      
        <DataGridComponent />
      </div>

    </div>
  );
};

export default App;