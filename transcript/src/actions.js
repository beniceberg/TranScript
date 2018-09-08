export const SET_TRANSCRIPT = "SET_TRANSCRIPT";

export const setTranscript = json => ({
  type: SET_TRANSCRIPT,
  json
});

export const requestTranscript = () => {
  return (dispatch, getState) => {
    const url = "http://localhost:3008/transcript";
    fetch(url, {
      // headers: {
      //   "Access-Control-Allow-Credentials": true,
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Methods": "GET",
      //   "Access-Control-Allow-Headers": "application/json"
      // }
    })
      .then(res => res.json())
      .then(json => dispatch(setTranscript(json)))
      .catch(err => console.log(err));
  };
};
