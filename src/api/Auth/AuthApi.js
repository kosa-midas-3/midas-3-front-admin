import CustomAxios from "../../util/CustomAxios";
import { getUserName } from "../../util/getUserName";

export const postAuth = async () => {
  const { data } = await CustomAxios.post(`/auth?name=${getUserName()}`);
  console.log(data);
  return data;
};
