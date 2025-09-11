// we will write our axios related configurations.
import axios from "axios";

const API = axios.create({
  timeout: 3000, // time limit to wait for the response from the server.
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "/api", // vite config server will redirect the request to the backend server.
  /// http://localhost:9500
}); // create a new instance of axios with custom configuration.

export default API;
