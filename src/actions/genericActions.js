import { SWITCHNAVBAR } from "../actionTypes/actionTypes";

export const switchNavbar = (value) => async (dispatch) => {
  console.log("qwerty inside action and action is going to dispatch");
  const action = {
    type: SWITCHNAVBAR,
    payload: value,
  };
  dispatch(action);
};
