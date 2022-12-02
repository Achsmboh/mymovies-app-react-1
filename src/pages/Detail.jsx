import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import api from "../services/api";
import Frame from "../components/Frame";
import Card from "../components/Card";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import ModalDetail from "../components/ModalDetail";

function Detail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [videosTwo, setVideosTwo] = useState([]);
  console.log("videos two", videosTwo);

  const id = location?.state?.id;

  function getDetail() {
    api
      .get_detail(id)
      .then((ress) => {
        const result = ress.data;
        setVideos(result);
        console.log("result", result);
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
        <div className="w-full ">
          <h1 className="w-full text-center text-7xl font-rubikDistressed pt-5 dark:text-white ">Similar movie</h1>
          <div className="w-full grid grid-cols-5">
            {data ? (
              data.map((item) => <Card labeHtml={"my-modal-3"} key={item.id} title={item.title} image={item.poster_path} tombol={"Add Favorite"} onNavigate={() => [setVideosTwo(item)]} />)
            ) : (
              <div>
                <h1>Loading mase</h1>
              </div>
            )}
          </div>
        </div>
        {videosTwo ? <ModalDetail image={videosTwo.poster_path} title={videosTwo.title} release={videosTwo.release_date} language={videosTwo.original_language} overview={videosTwo.overview} id={videosTwo.id} /> : <Loading />}
      </div>
    </Layout>
  );
}

export default Detail;
