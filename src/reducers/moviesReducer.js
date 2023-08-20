import {
  GET_UPCOMING_MOVIES,
  GET_MOVIE_DETAILS,
  SEARCHED_MOVIES,
  SWITCHNAVBAR,
} from "../actionTypes/actionTypes";
const initialState = {
  upcomingMovies: [],
  movieDetail: JSON.parse(localStorage.getItem("movieDetail")) || {},
  searchedMovies: [],
  showSearchBar: true,
};
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UPCOMING_MOVIES: {
      if (action?.payload?.page === 1) {
        return { ...state, upcomingMovies: action?.payload?.results };
      } else {
        return {
          ...state,
          upcomingMovies: state?.upcomingMovies.concat(
            action?.payload?.results
          ),
        };
      }
    }
    case GET_MOVIE_DETAILS: {
      localStorage.setItem("movieDetail", JSON.stringify(action?.payload));
      return {
        ...state,
        movieDetail: action?.payload,
      };
    }
    case SEARCHED_MOVIES: {
      if (action?.payload?.page === 1) {
        return { ...state, searchedMovies: action?.payload?.results };
      } else {
        return {
          ...state,
          searchedMovies: state?.searchedMovies.concat(
            action?.payload?.results
          ),
        };
      }
    }
    case SWITCHNAVBAR:
      return {
        ...state,
        showSearchBar: action?.payload,
      };
    default:
      return state;
  }
};
export default moviesReducer;
