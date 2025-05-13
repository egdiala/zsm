import { useMutation } from "@tanstack/react-query";
import { setItem } from "@/utils/local-storage";
import { useNavigate } from "react-router-dom";
import { axiosInit } from "@/services/axios-init";
import { APP_TOKEN_STORAGE_KEY, APP_USERDATA_STORAGE_KEY } from "@/constants/utils";
import { login } from "../../apis/auth";


function onLoginSuccess(responseData: any) {
  const { token, ...userData } = responseData;
  setItem(APP_TOKEN_STORAGE_KEY, token);
  setItem(APP_USERDATA_STORAGE_KEY, JSON.stringify(userData));
  axiosInit(token)
}

// eslint-disable-next-line no-unused-vars
export const useLogin = (fn?: (v: any) => void) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: (response: any) => {
        fn?.(response);
        onLoginSuccess(response?.data)
        navigate("/")
    },
    onError: (err: any) => {
      console.error(err)
    },
  });
};
