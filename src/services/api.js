import axios from "axios";

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`,
});

export default {
  now_playing: (page) =>
    instance({
      method: `GET`,
      url: `now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`,
    }),
  get_detail: (id) =>
    instance({
      method: `GET`,
      url: `${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
    }),
  similar_movie: (id, page) =>
    instance({
      method: `GET`,
      url: `${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`,
    }),
};
