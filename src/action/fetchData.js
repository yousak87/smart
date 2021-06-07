import axios from "axios";
import { setLoading } from "./loading";

const photoUrl = "https://jsonplaceholder.typicode.com/photos";
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const albumUrl = "https://jsonplaceholder.typicode.com/albums";

const fetchData = () => (dispatch) => {
  return axios
    .get(photoUrl)
    .then((resp) => {
      dispatch({
        type: "SET_PHOTO",
        payload: resp.data,
      });

      axios
        .get(usersUrl)
        .then((resp) => {
          dispatch({
            type: "SET_USERS",
            payload: resp.data,
          });

          axios
            .get(albumUrl)
            .then((resp) => {
              dispatch({
                type: "SET_ALBUM",
                payload: resp.data,
              });
              setLoading(false)(dispatch);
            })
            .catch((err) => {
              setLoading(false)(dispatch);
              alert("error fetch data");
            });
        })
        .catch((err) => {
          setLoading(false)(dispatch);
          alert("error fetch data");
        });
    })
    .catch((err) => {
      setLoading(false)(dispatch);
      alert("error fetch data");
    });
};

const setThumbnail = (data) => (dispatch) => {
  return dispatch({
    type: "SET_THUMBNAIL",
    payload: data,
  });
};

const setFindText = (data) => (dispatch) => {
  return dispatch({
    type: "SET_FIND_TEXT",
    payload: data,
  });
};

export { fetchData, setThumbnail, setFindText };
