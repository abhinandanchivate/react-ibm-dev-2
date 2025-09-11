// register / login/ load user details

import API from "../../utls/api";

export const registerUser = async (formData) => {
  try {
    //localhost:9500/api/users
    ///users : endpoint to register the user. used in the post call
    // /api : base url defined in the api.js file
    // http://localhost:9500: backend server url: server{proxy : }
    const res = await API.post("/users", formData);
    return { data: res.data, status: res.status };
    // data: jwt token
    // status: res.status // 200, 201
  } catch (err) {
    const res = err.response;
    console.log(res);
    if (res.status === 400) {
      throw { data: err.response.data.errors, status: res.status };
    }
  }
};
