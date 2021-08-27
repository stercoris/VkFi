import { createBuilder, createMiddleware } from "R1IO";
import { User } from "IUser";
import { MailingMenu } from "bot/routes/public/student/MaillingMenu/MailingMenu";
import { MainMenu } from "bot/routes/public/student/MainMenu/MainMenu";
import { goToPrevMenuAction } from "bot/actions/goBackNavigationAction";

export interface BotContext {
  user: User;
}

export enum Menus {
  MainMenu = "Main",
  MailingMenu = "Mailing",
}

export const fakeUser: User = {
  selectedWeek: "Green",
  subscribed: true,
  username: "Dima",
  eveningMailingTime: 18,
  morningMailingTime: 8,
  selectedMenu: Menus.MailingMenu,
  previousMenu: Menus.MainMenu,
};

const router = createBuilder<BotContext, Menus>(
  {
    [Menus.MainMenu]: {
      build: MainMenu,
      falldownAction: goToPrevMenuAction(),
    },
    [Menus.MailingMenu]: {
      build: MailingMenu,
    },
  },
  ({ user }) => user.selectedMenu
);

export const RootMiddleware = createMiddleware(router, async () => ({
  user: fakeUser,
}));
