import axios from "axios";

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`,
});

export default {
  now_playing: (page) =>
    instance({
      method: `GET`,
      url: `now_playing?api_key=${process.env.REACT_APP_TMBD_KEY}&page=${page}`,
    }),
};
