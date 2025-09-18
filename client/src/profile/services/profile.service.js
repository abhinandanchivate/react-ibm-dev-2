//localhost:9500/api/profile/me
// /profile/me

import API from "../../utls/api";

export const getCurrentProfile = async () => {
  try {
    const res = await API.get("/profile/me");
    return { data: res.data, status: res.status };
  } catch (err) {
    const res = err.response;
    console.log(res);
    if (res.status === 400) {
      throw { data: err.response.data.errors, status: res.status };
    }
  }
};

export const createOrUpdateProfile = async (formData) => {
  try {
    const res = await API.post("/profile", formData);
    return { data: res.data, status: res.status };
  } catch (err) {
    const res = err.response;
    console.log(res);
    if (res.status === 400) {
      throw { data: err.response.data.errors, status: res.status };
    }
  }
};
