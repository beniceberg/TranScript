import { SET_TRANSCRIPT, SET_TIME } from "./actions";

const intialState = {
  script: {},
  time: 0
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_TRANSCRIPT:
      return {
        ...state,
        script: action.json
      };
    case SET_TIME:
      return {
        ...state,
        time: action.time
      };
    default:
      return state;
  }
};

export default reducer;
