import { createBuilder, createMiddleware } from "r1-io";
import { User } from "IUser";
import { MainMenu } from "bot/routes/public/MainMenu/MainMenu";
import { goToPrevMenuAction } from "bot/actions/goBackNavigationAction";
import { SettingsMenu } from "bot/routes/public/SettingsMenu/SettingsMenu";

export interface BotContext {
  user: User;
}

export enum Menus {
  MainMenu = "Main",
  SettingsMenu = "Settings",
}

export const fakeUser: User = {
  selectedWeek: "Green",
  subscribed: true,
  username: "Dima",
  pullInteval: 18,
  mailingInterval: 8,
  selectedMenu: Menus.MainMenu,
  previousMenu: Menus.MainMenu,
};

const router = createBuilder<BotContext, Menus>(
  {
    [Menus.MainMenu]: {
      build: MainMenu,
    },
    [Menus.SettingsMenu]: {
      build: SettingsMenu,
    },
  },
  ({ user }) => user.selectedMenu
);

const beautyLog = (message: string) =>
  console.log("\x1b[31m", "Новое сообщение: ", "\x1b[0m", message);

export const RootMiddleware = createMiddleware(router, async (context) => {
  beautyLog(JSON.stringify(context.text));
  return { user: fakeUser };
});
