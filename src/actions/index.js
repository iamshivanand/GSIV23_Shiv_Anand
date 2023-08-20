import * as api from "../api/api";
import {
  GET_UPCOMING_MOVIES,
  GET_MOVIE_DETAILS,
  SEARCHED_MOVIES,
} from "../actionTypes/actionTypes";
// import { upcomingMoviesAPI } from "../api/api";

export const getUpcomingMovies = (page) => async (dispatch) => {
  try {
    const data = await api.fetchUpcomingMovies(page);
    console.log("action", data);
    const action = {
      type: GET_UPCOMING_MOVIES,
      payload: data,
    };
    dispatch(action);
  } catch (error) {}
};
export const updateMovieDetail = (data) => async (dispatch) => {
  try {
    const data1 = await api.moviesDetails(data?.id);
    let releaseDate = data1?.release_date.split("-")[0];
    console.log("helllloooooo", data1.credits);
    let director = data1.credits.crew?.filter((each) => {
      if (each.department === "Directing") {
        return each.name;
      }
    });
    let cast = data1.credits?.cast;
    let length = data1?.runtime;
    let description = data?.overview;
    const action = {
      type: GET_MOVIE_DETAILS,
      payload: {
        releaseDate,
        cast,
        length,
        description,
        director,
        backdrop_path: data?.poster_path || data?.backdrop_path,
        title: data?.title,
      },
    };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const searchMovies = (searchInput, page) => async (dispatch) => {
  try {
    //search api for movie
    const data = await api.searchMovies(searchInput, page);
    console.log("searchData", data);
    const action = {
      type: SEARCHED_MOVIES,
      payload: data,
    };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
