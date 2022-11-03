export const getPassword = () => {
  const password = localStorage.getItem("password");
  return password ? password : "";
};
