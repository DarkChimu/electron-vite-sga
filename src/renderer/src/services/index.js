import axios from "./axios";

export const api = {
  auth: {
    login: (params) => axios.post(`/login`, params),
    register: (params) => axios.post(`/register`, params),
    refresh: (params) =>
      axios.request({
        url: `/refresh`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${params}`,
          authorization: `Bearer ${params}`,
        },
      }),
  },
  user: {
    profile: (params) => axios.get(`/user/profile`, params),
    setProfile: (params) => axios.put(`/user/profile`, params),
  },

  test: {
    token: (params) => {
      console.log(params);
      return axios.post("/token", params);
    },
    getToken: (params) => axios.get("/token_test", params),
  },
};
