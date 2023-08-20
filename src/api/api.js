import axios from "axios";
const baseURL = "https://api.themoviedb.org/3/";
const upComingMoviesBaseURL = "https://api.themoviedb.org/3/";
const detailsMovieBaseURL = "https://api.themoviedb.org/3/";
const searchURL =
  "https://api.themoviedb.org/3/search/movie?query=open&include_adult=false&language=en-US&page=1";
const headers = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWNkMDFiZTAwM2MyYmZkN2M3MDBmMGMyZDg0MGMxNyIsInN1YiI6IjYwMzdmNzEwYjc2Y2JiMDAzZGNjZTQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NNoC7J777GCr1ytMxT9ttzm_FjkIg_qTqEWIHCd3oG4",
  },
};
// ("https://api.themoviedb.org/3/movie/upcoming?&language=en-US&page=1");
export const fetchUpcomingMovies = async (page) => {
  const { data } = await axios.get(
    `${baseURL}movie/upcoming?language=en-US&page=${page}&sort_by=popularity.desc`,
    headers
  );
  console.log("api data", data);
  return data;
};
export const moviesDetails = async (id) => {
  const { data } = await axios.get(
    `${baseURL}movie/${id}?append_to_response=credits&language=en-US`,
    headers
  );
  return data;
};
export const searchMovies = async (text, page) => {
  const { data } = await axios.get(
    `${baseURL}search/movie?query=${text}&language=en-US&page=${page}`,
    headers
  );
  return data;
};
