import type { IUser } from "@/types/user";

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IAuthFormData {
  username: string;
  password: string;
}
