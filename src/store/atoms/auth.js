import { atom } from "recoil"

export const authAtom = atom({
  key: 'authState',
  default: {
    isAuthenticated: false,
    username: null,
    email: null,
  },
});
