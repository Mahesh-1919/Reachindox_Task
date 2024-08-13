import { atom } from "recoil";
export const MailCountState = atom({
  key: "mailCountState",
  default: 0,
});

export const DarkModeState = atom({
  key: "darkModeState",
  default: false,
});

export const pageState = atom({
  key: "pageState",
  default: false,
});
