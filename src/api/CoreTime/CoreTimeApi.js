import CustomAxios from "../../util/CustomAxios";
import { getPassword } from "../../util/getPassword";

export const settingCoreTime = async ({ reason, timeList, userList }) => {
  await CustomAxios.post(`/core-time?name=${getPassword()}`, {
    reason,
    timeList,
    userList,
  });
};
