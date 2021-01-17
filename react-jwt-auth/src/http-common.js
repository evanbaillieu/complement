import axios from "axios";
import authHeader from "./services/auth-header"

export default axios.create({
  baseURL: "http://localhost:3002/api",
  headers: authHeader()
});