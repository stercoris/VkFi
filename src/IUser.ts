import { Menus } from "bot/routes/Router";

export interface User {
  subscribed: boolean;
  username: string;
  selectedWeek: "Red" | "Green";
  morningMailingTime: number;
  eveningMailingTime: number;
  selectedMenu: Menus;
  previousMenu: Menus;
}
