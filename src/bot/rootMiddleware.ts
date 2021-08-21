import { Middleware } from "R1IO";
import { Menus, Router } from "bot/routes/Router";
import { User } from "IUser";
import { createTimerAction } from "bot/actions/timerAction";
import { subscribeToMailingAction } from "bot/actions/subscribeToMailingActions";
import { goToMenuAction } from "bot/actions/goBackNavigationAction";

export const fakeUser: User = {
  selectedWeek: "Green",
  subscribed: true,
  username: "Dima",
  eveningMailingTime: 18,
  morningMailingTime: 8,
  selectedMenu: Menus.MailingMenu,
  previousMenu: Menus.MainMenu,
};

export const RootMiddleware = Middleware(
  Router,
  [createTimerAction, subscribeToMailingAction, goToMenuAction],
  async () => ({ user: fakeUser })
);
