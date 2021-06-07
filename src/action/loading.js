const setLoading = (data) => (dispatch) => {
  return dispatch({
    type: "SET_LOADING",
    payload: data,
  });
};

export { setLoading };
