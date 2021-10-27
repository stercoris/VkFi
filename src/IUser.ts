import { Menus } from "@Root";

export interface User {
  subscribed: boolean;
  username: string;
  selectedWeek: "Red" | "Green";
  mailingInterval: number;
  pullInteval: number;
  selectedMenu: Menus;
  previousMenu: Menus;
}
