import { authRequest } from "@/api";

export const connectSign = async (wallet: string, signature: string) => {
  const { data } = await authRequest.post<{ data: { token: string } }>(
    "auth/connect-sign",
    {
      wallet,
      signature,
    }
  );
  return data.data;
};
