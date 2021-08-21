import { createBuilder, createMiddleware } from "R1IO";
import { Menus, Router } from "bot/routes/Router";
import { User } from "IUser";

export const fakeUser: User = {
  selectedWeek: "Green",
  subscribed: true,
  username: "Dima",
  eveningMailingTime: 18,
  morningMailingTime: 8,
  selectedMenu: Menus.MailingMenu,
  previousMenu: Menus.MainMenu,
};

const keyboardBuider = createBuilder(Router);

export const RootMiddleware = createMiddleware(keyboardBuider, async () => ({
  user: fakeUser,
}));
