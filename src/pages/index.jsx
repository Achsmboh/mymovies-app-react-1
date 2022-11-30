import "../styles/App.css";
import Layout from "../components/Layout";
import Card from "../components/Card";
import api from "../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function Home() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  function getNowPlaying() {
    api
      .now_playing(page)
      .then((ress) => {
        const { results } = ress.data;
        const newPage = page + 1;
        const temp = [...datas];
        temp.push(...results);
        setData(temp);
        setPage(newPage);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    getNowPlaying();
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
      <div className="flex w-full flex-col bg-abuTua">
        <div className="h-44 w-full flex justify-center items-end">
          <h1 className="text-7xl font-rubikDistressed p-5 text-gray-600">NOW PLAYING</h1>
        </div>
        <div className="grid grid-cols-5 ">{loading ? <Loading /> : datas.map((item) => <Card key={item.id} image={item.poster_path} tombol={"Add Favorite"} title={item.title} onNavigate={() => handleDetail(item.id)} />)}</div>
        <div className="p-1">
          <button className="btn w-full" onClick={() => getNowPlaying()}>
            Load More
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
