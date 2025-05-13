import { axiosInstance } from "./axios-instance";

export function axiosInit(token: string) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}