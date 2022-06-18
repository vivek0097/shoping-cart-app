import React, { useState } from "react";
import "./App.css";

import Footer from "./components/Footer";

import Home from "./components/Home";
import List from "./components/List";

function App() {
  // const [data, setData] = useState(List);
  const [filterData, setFilterData] = useState([]);

  return (
    <div className="container-fluid ps-0 pe-0">
      <Home List={List} filterData={filterData} className="App" />
      <Footer classname="footer" />
    </div>
  );
}

export default App;
