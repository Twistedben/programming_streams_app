import axios from "axios";

// URL for json-server
export default axios.create({
  baseURL: "http://localhost:3001"
});
