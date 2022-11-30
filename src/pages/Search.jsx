import React from "react";
import api from "../services/api";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Search() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const title = location?.state?.title;

  function getSearch() {
    api
      .get_Search(title)
      .then((ress) => {
        const result = ress.data.results;
        console.log("result", result);
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  console.log(data);
  useEffect(() => {
    getSearch();
  }, []);

  function handleDetail(id) {
    navigate(`/detail/${id}`, {
      state: {
        id: id,
      },
    });
  }
  return (
    <Layout>
      <div className="className=" flex w-full flex-col bg-abuTua>
        <div className="h-44 w-full flex justify-center items-end">
          <h1 className="text-7xl font-rubikDistressed p-5 text-gray-600">{location.state.title}</h1>
        </div>
        <div className="grid grid-cols-5">
          {loading ? (
            <Loading />
          ) : data ? (
            data.map((item) => <Card title={item.title} image={item.poster_path} tombol={"Add Favorite"} onNavigate={() => handleDetail(item.id)} />)
          ) : (
            <div className="w-full flex justify-center items-center mt-20 col-span-5  text-center h-full">
              <h1 className="text-5xl font-rubikDistressed text-slate-300">Sorry, the movie you are looking for does not exist!</h1>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Search;
