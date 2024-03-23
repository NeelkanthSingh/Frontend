import { atom } from "recoil"

 export const authAtom = atom({
     key: "isAuthenticated",
     default: true
 })