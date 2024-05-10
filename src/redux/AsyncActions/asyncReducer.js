import {
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./AsyncAction";

const initialState = {
  loding: false,
  data: "",
  error: "",
};

export const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state.user,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state.user,
        loading: false,
        data: action.payload,
      };
    case FETCH_USER_ERROR:
      return {
        ...state.user,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
