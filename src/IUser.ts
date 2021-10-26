import { Menus } from "bot/rootMiddleware";

export interface User {
  subscribed: boolean;
  username: string;
  selectedWeek: "Red" | "Green";
  mailingInterval: number;
  pullInteval: number;
  selectedMenu: Menus;
  previousMenu: Menus;
}
