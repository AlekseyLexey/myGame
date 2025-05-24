import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  type AxiosError,
} from "axios";

const $api: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: "/api",
});

$api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    return config;
  }
);

$api.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error: AxiosError) => {
    const prevReq: InternalAxiosRequestConfig | undefined = error.config;
    if (error.response!.status == 401) {
      try {
        const res = await $api.get("/refresh");
        localStorage.setItem("token", res.data.accessToken);
        return $api.request(prevReq!);
      } catch (error) {
        console.log("Рефреш токен истек / не валиден!");
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default $api;
