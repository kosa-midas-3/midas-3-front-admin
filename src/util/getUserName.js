export const getUserName = () => {
  const username = localStorage.getItem("username");
  return username ? username : "";
};
