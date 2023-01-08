import axiosAPI from ".";
export const signInAPI = (userLogin) => {
  return axiosAPI.post("/user", userLogin);
};
