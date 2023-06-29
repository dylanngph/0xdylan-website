import { atomWithStorage } from "jotai/utils";

export const SIGN_MESSAGE =
  'Greetings from BionSwap!\n\nSign this message to log into the system.\n\nThis signature will not cost you any fees.';

export const triggerSignMessage = atomWithStorage("triggerSignMessage", true);
export const accessToken = atomWithStorage<string|undefined>("accessToken", undefined);
