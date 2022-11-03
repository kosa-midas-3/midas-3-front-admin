import CustomAxios from "../../util/CustomAxios";
import { getPassword } from "../../util/getPassword";

export const createUser = async ({ department, nickname, password }) => {
  await CustomAxios.post("/user", {
    department,
    name: password,
    nickname,
  });
};

export const deleteUser = async (name) => {
  await CustomAxios.delete(`/user?name=${name}`);
};

export const modifyUser = async ({
  department,
  nickname,
  password,
  beforeName,
}) => {
  await CustomAxios.put(`/user?name=${getPassword()}`, {
    department,
    nickname,
    name: password,
    targetName: beforeName,
  });
};
