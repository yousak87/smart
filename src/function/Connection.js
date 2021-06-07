import axios from "axios";

class Connection {
  get(url) {
    return axios.get(`${url}`);
  }
}

export default Connection;
