import CustomAxios from "../../util/CustomAxios";

export const getDepartmentList = async () => {
  return (await CustomAxios.get("/department")).data;
};
