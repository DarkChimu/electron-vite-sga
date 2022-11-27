import axios from "axios";
import { getAuthToken } from "./authenticationStorage";
import { interceptorErrors, interceptorSuccess } from "./interceptors";
const API_URL = process.env.BACKEND_URL || "http://localhost:3333";

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
  async (config) => {
    try {
      const token = await getAuthToken();
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
    } catch (error) {
      // saving error
    }

    config.headers["X-Requested-With"] = "XMLHttpRequest";
    config.headers["Accept-Language"] = "es";
    config.headers["Accept"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(interceptorSuccess, interceptorErrors);

export default axios;
