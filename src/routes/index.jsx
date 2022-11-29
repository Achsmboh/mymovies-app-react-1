import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages";
import Detail from "../pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
