import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages";
import Detail from "../pages/Detail";
import Search from "../pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/search/:title" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
