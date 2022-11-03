import CustomAxios from "../../util/CustomAxios";
import { getPassword } from "../../util/getPassword";

export const postAuth = async () => {
  const { data } = await CustomAxios.post(`/auth?name=${getPassword()}`);
  // console.log(data);
  return data;
};

export const getHomeApply = async () => {
  const { data } = await CustomAxios.get(`/home/apply`);
  console.log(data.homeApplies);
  return data;
};
