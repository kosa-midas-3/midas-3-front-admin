import axios from "axios";

const CustomAxios = axios.create({
  baseURL: "http://192.168.101.96:8080",
});

export default CustomAxios;
