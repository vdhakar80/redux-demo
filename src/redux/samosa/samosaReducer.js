import { BUY_SAMOSA, MAKE_SAMOSA } from "./samosaAction";

const initialState = {
  number_of_samosas: 10,
};

export const samosaReducer = (state = initialState, action) => {
  switch (action?.type) {
    case BUY_SAMOSA:
      return {
        ...state,
        number_of_samosas: state.number_of_samosas - 1,
      };
    case MAKE_SAMOSA:
      return {
        ...state,
        number_of_samosas: state.number_of_samosas + 1,
      };

    default:
      return state;
  }
};
