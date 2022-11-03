import CustomAxios from "../../util/CustomAxios";
import { getPassword } from "../../util/getPassword";

export const postAuth = async () => {
  const { data } = await CustomAxios.post(`/auth?name=${getPassword()}`);
  // console.log(data);
  return data;
};

export const getHomeApply = async () => {
  const { data } = await CustomAxios.get(`/home/apply`);
  // console.log(data.homeApplies);
  return data;
};

export const putUser = async (currentName, department, name, nickname) => {
  const { data } = await CustomAxios.put(`/user?name=${currentName}`, {
    department: department,
    name: name,
    nickname: nickname,
  });
  console.log(data);
};

export const delUser = async (name) => {
  await CustomAxios.delete(`/user?name=${name}`);
};

export const homeApply = async (accept, homeApplyId) => {
  console.log(accept, homeApplyId);
  await CustomAxios.put(`/home/apply?name=${getPassword()}`, {
    accept: accept,
    homeApplyId: homeApplyId,
  });
};
