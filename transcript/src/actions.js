export const SET_TRANSCRIPT = "SET_TRANSCRIPT";
export const SET_TIME = "SET_TIME";

export const setTranscript = json => ({
  type: SET_TRANSCRIPT,
  json
});

export const requestTranscript = () => {
  return (dispatch, getState) => {
    const url = "http://localhost:3008/transcript";
    fetch(url)
      .then(res => res.json())
      .then(json => dispatch(setTranscript(json)))
      .catch(err => console.log(err));
  };
};

export const setCurrentTime = time => ({
  type: SET_TIME,
  time
});
