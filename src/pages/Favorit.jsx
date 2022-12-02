import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { setFavorites } from "../utils/reducers/reducer";
import { useNavigate } from "react-router-dom";

function Favorit() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.data.favorites);
  const navigate = useNavigate();

  function handleDetail(id) {
    navigate(`/detail/${id}`, {
      state: {
        id: id,
      },
    });
  }

  function handleRemove(movie) {
    const del = favorites.filter((e) => e !== movie);
    const newMovie = JSON.stringify(del);
    dispatch(setFavorites(del));
    localStorage.setItem("favMovies", newMovie);
  }
  return (
    <Layout>
      <div>
        <div className="h-44 w-full flex justify-center items-end">
          <h1 className="text-7xl font-rubikDistressed p-5 text-gray-600 dark:text-white">Favorite</h1>
        </div>
        <div className="grid grid-cols-5">
          {favorites ? favorites.map((item) => <Card key={item.id} image={item.poster_path} title={item.title} onNavigate={() => handleDetail(item.id)} tombol={"Remove"} onClick={() => handleRemove(item)} />) : <></>}
        </div>
      </div>
    </Layout>
  );
}

export default Favorit;
