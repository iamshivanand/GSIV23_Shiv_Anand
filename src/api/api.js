import axios from "axios";
const upComingMoviesBaseURL =
  "https://api.themoviedb.org/3/movie/upcoming?include_adult=true&include_video=false&language=en-US&page=";

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
    `${upComingMoviesBaseURL}${page}&sort_by=popularity.desc`,
    headers
  );
  console.log("api data", data);
  return data;
};
export const upcomingMoviesAPI = async (page) => {
  console.log("page", page);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWNkMDFiZTAwM2MyYmZkN2M3MDBmMGMyZDg0MGMxNyIsInN1YiI6IjYwMzdmNzEwYjc2Y2JiMDAzZGNjZTQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NNoC7J777GCr1ytMxT9ttzm_FjkIg_qTqEWIHCd3oG4",
    },
  };

  await fetch(
    `${upComingMoviesBaseURL}${page}&sort_by=popularity.desc`,
    options
  );
};
