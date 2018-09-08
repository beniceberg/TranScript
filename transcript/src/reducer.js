import { SET_TRANSCRIPT } from "./actions";

const intialState = {
  script: {}
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_TRANSCRIPT:
      return {
        ...state,
        script: action.json
      };
    default:
      return state;
  }
};

export default reducer;
