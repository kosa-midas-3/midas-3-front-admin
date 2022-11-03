import CustomAxios from "../../util/CustomAxios";
import { getPassword } from "../../util/getPassword";

export const postAuth = async () => {
  const { data } = await CustomAxios.post(`/auth?name=${getPassword()}`);
  return data;
};

export const getHomeApply = async () => {
  const { data } = await CustomAxios.get(`/home/apply`);
  return data;
};

export const putUser = async (currentName, department, name, nickname) => {
  const { data } = await CustomAxios.put(`/user?name=${currentName}`, {
    department: department,
    name: name,
    nickname: nickname,
  });
};

export const delUser = async (name) => {
  await CustomAxios.delete(`/user?name=${name}`);
};

export const homeApply = async ({ accept, homeApplyId }) => {
  await CustomAxios.put(`/home/apply?name=${getPassword()}`, {
    accept: accept,
    homeApplyId: homeApplyId,
  });
};
