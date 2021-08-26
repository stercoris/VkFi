import { createBuilder, createMiddleware } from "R1IO";
import { User } from "IUser";
import { MailingMenu } from "bot/routes/public/student/MaillingMenu/MailingMenu";
import { MainMenu } from "bot/routes/public/student/MainMenu/MainMenu";

export interface RouterProps {
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

const router = createBuilder<RouterProps, Menus>(
  {
    [Menus.MainMenu]: MainMenu,
    [Menus.MailingMenu]: MailingMenu,
  },
  ({ user }) => user.selectedMenu
);

export const RootMiddleware = createMiddleware(router, async () => ({
  user: fakeUser,
}));
