import { useAtom } from "jotai";
import { useEffect } from "react";
import { authRequest } from "@/api";
import { accessToken, triggerSignMessage } from "@/storage/auth";
import {RESET} from 'jotai/utils'

export const useAccessToken = () => {
  const [accessTokenAtom, setAccessTokenAtom] = useAtom(accessToken);
  const [triggerSignMessageAtom, setTriggerSignMessageAtom] =
    useAtom(triggerSignMessage);

  const setAccessToken = (token: string | undefined) => {
    setAccessTokenAtom(token);
  };

  const requireSignMessage = () => {
    setTriggerSignMessageAtom(!triggerSignMessageAtom);
  };

  const logout = () => {
    setAccessTokenAtom(RESET);
  };

  useEffect(() => {
    if(accessTokenAtom){
      authRequest.defaults.headers.common["Authorization"] = `Bearer ${accessTokenAtom}`;
    }
  }, [accessTokenAtom])
  

  return {
    accessToken: accessTokenAtom,
    triggerSignMessage: triggerSignMessageAtom,
    setAccessToken,
    requireSignMessage,
    logout,
  };
};
