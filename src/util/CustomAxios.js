import axios from "axios";

const CustomAxios = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
});

export default CustomAxios;
