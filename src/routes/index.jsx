import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";

import Home from "../pages";
import Detail from "../pages/Detail";
import Search from "../pages/Search";
import Favorit from "../pages/Favorit";

import { ThemeContext } from "../utils/context";
import { setFavorites } from "../utils/reducers/reducer";

function App() {
  // baigian 3 dari set favorites menggunakan redux
  const dispatch = useDispatch();

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

  // ini redux
  useEffect(() => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      dispatch(setFavorites(JSON.parse(getMovies)));
    }
  }, []);
  // sampai sini

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="/search/:title" element={<Search />} />
          <Route path="/favorite" element={<Favorit />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
