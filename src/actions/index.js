import * as api from "../api/api";
import { GET_UPCOMING_MOVIES } from "../actionTypes/actionTypes";
// import { upcomingMoviesAPI } from "../api/api";

export const getUpcomingMovies = (page) => async (dispatch) => {
  try {
    const data = await api.fetchUpcomingMovies(page);
    console.log("action", data);
    const action = {
      type: GET_UPCOMING_MOVIES,
      payload: data?.results,
    };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
// export const getUpcomingMovies =  (page) =>async(dispatch)=> {
//   //   upcomingMoviesAPI(page).then((response) => {
//   //     console.log("response1", response);
//   //   });
//   const data = await upcomingMoviesAPI(page);
//   console.log("data hai ", data);
//   return {
//     type: GET_UPCOMING_MOVIES,
//     payload: {
//       //here we will send the payload received from api to reducers
//     },
//   };
// };
