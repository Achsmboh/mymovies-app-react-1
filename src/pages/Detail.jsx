import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import api from "../services/api";
import Frame from "../components/Frame";
import Card from "../components/Card";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function Detail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);

  const id = location?.state?.id;

  function getDetail() {
    api
      .get_detail(id)
      .then((ress) => {
        const result = ress.data;
        setVideos(result);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function getSimilar() {
    api
      .similar_movie(id, page)
      .then((ress) => {
        const result = ress.data.results;
        setData(result);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getDetail();
    getSimilar();
  }, []);

  return (
    <Layout>
      <div className="w-full h-full">
        <div className="w-full h-full">
          {loading ? (
            <Loading />
          ) : (
            <Frame
              background={`${videos.backdrop_path}`}
              image={videos.poster_path}
              runtime={videos.runtime}
              title={videos.title}
              release={videos.release_date}
              overview={videos.overview}
              genre={videos?.genres?.map((x) => x.name)}
              language={videos.original_language}
              id={videos.id}
            />
          )}
        </div>
        <div className="mt-5 w-full">
          <h1 className="w-full text-center text-7xl font-rubikDistressed my-5">Similar movie</h1>
          <div className="w-full grid grid-cols-5">
            {data ? (
              data.map((item) => <Card key={item.id} title={item.title} image={item.poster_path} tombol={"Add Favorite"} />)
            ) : (
              <div>
                <h1>Loading mase</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Detail;
