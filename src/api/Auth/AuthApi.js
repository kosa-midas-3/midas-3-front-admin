import CustomAxios from "../../util/CustomAxios";
import { getUserName } from "../../util/getUserName";

export const postAuth = async () => {
  const { data } = await CustomAxios.post(`/auth?name=${getUserName()}`);
  // console.log(data);
  return data;
};

export const getHomeApply = async () => {
  const { data } = await CustomAxios.get(`/home/apply`);
  console.log(data.homeApplies);
  return data;
};
