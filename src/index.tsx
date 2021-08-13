import { Router } from "./bot/routes/Router";

export enum Menus {
  MainMenu,
  MailingMenu,
}

export interface User {
  subscribed: boolean;
  username: string;
  selectedWeek: "Red" | "Green";
  morningMailingTime: number;
  eveningMailingTime: number;
  selectedMenu: Menus;
}

function log(keyboard: React.ReactElement<any, any> | null) {
  console.log(keyboard);
}

log(
  Router({
    user: {
      selectedWeek: "Green",
      subscribed: true,
      username: "Dima",
      eveningMailingTime: 18,
      morningMailingTime: 8,
      selectedMenu: Menus.MailingMenu,
    },
  })
);
