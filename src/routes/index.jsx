import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState, useMemo } from "react";

import Home from "../pages";
import Detail from "../pages/Detail";
import Search from "../pages/Search";

import { ThemeContext } from "../utils/context";

function App() {
  // ini context
  const [isLight, setIsLight] = useState(true);
  const theme = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);

  // sampai sini

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="/search/:title" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
