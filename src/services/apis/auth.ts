
import { axiosInstance } from "../axios-instance";
import type { LoginPayload } from "@/types/auth";

export const login = async (data: LoginPayload) => {
  const res = await axiosInstance.post("admins/auths/login", data);
  return res.data;
};