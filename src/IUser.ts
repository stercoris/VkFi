import { Menus } from "bot/rootMiddleware";

export interface User {
  subscribed: boolean;
  username: string;
  selectedWeek: "Red" | "Green";
  morningMailingTime: number;
  eveningMailingTime: number;
  selectedMenu: Menus;
  previousMenu: Menus;
}
