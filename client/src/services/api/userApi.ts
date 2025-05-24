import $api from "@/config/axiosConfig";
import type { IAuthFormData, IAuthResponse } from "../model/userApiModel";

const enum API_URL {
  REFRESH = "/refresh",
  LOGOUT = "/logout",
  REGISTRATION = "/registration",
  AUTH = "/auth",
}

export const refreshReq = async (): Promise<IAuthResponse> => {
  try {
    const { data } = await $api.get(API_URL.REFRESH);
    localStorage.setItem("token", data.accessToken);

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logoutReq = async (): Promise<void> => {
  try {
    const { data } = await $api.post(API_URL.LOGOUT);
    localStorage.removeItem("token");

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logIn = async (
  formData: IAuthFormData
): Promise<IAuthResponse> => {
  try {
    const { data } = await $api.post(API_URL.AUTH, formData);
    localStorage.setItem("token", data.accessToken);

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registration = async (
  formData: IAuthFormData
): Promise<IAuthResponse> => {
  try {
    const { data } = await $api.post(API_URL.REGISTRATION, formData);
    localStorage.setItem("token", data.accessToken);

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
