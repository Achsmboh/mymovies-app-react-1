import logo from "../assets/logo.svg";
import "../styles/App.css";
import Layout from "../components/Layout";
import Card from "../components/Card";
import api from "../services/api";
import { useState, useEffect } from "react";

function App() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

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
  return (
    <Layout>
      <div className="grid grid-cols-5">
        {datas.map((item) => (
          <Card image={item.poster_path} tombol={"Add Favorite"} />
        ))}
      </div>
      <div>
        <button className="btn w-full" onClick={() => getNowPlaying()}>
          Load More
        </button>
      </div>
    </Layout>
  );
}

export default App;
