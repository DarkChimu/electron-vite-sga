// import { useAuthReducer } from "../hooks/useAuthReducer";
import {
  setAuthToken,
  getRefreshToken,
} from "./authenticationStorage";
import { api } from ".";
import axios from "axios";

const interceptorSuccess = (response) => {
  return response;
};

const interceptorErrors = async (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        console.log(error.response);
        console.log(error.config);
        const ref_token = await getRefreshToken();
        if (error.response.data) {
          const response = await api.auth.refresh(ref_token);
          // .then((response) => {
          //   setAuthToken(response.data.access_token);
          // });
          setAuthToken(response.data.access_token);

          // volver hacer la peticion
          const originalConfig = error.config;

          if (!originalConfig._retry) {
            originalConfig._retry = true;
            return await axios(originalConfig);
          }
        }
        break;
      default:
    }
  }

  return Promise.reject(error);
};

export { interceptorSuccess, interceptorErrors };
