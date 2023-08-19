import { GET_UPCOMING_MOVIES } from "../actionTypes/actionTypes";
const initialState = {
  upcomingMovies: [],
};
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: state?.upcomingMovies.concat(action?.payload),
      };
    default:
      return state;
  }
};
export default moviesReducer;
