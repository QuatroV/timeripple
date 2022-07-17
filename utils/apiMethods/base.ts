import axios from "axios";

const baseURL = "/api/";

const api = axios.create({ baseURL });

const authInterceptor = (config: any) => {
  config.headers.authorization = `${localStorage.getItem("jwtToken")}`;
  return config;
};

const authApi = api;

authApi.interceptors.request.use(authInterceptor);

export { api, authApi };
