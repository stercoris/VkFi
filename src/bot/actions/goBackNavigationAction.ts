import { fakeUser, BotContext } from "bot/rootMiddleware";
import { User } from "IUser";
import { createAction } from "R1IO";

const swapUserMenus = (u: User) =>
  ([u.selectedMenu, u.previousMenu] = [u.previousMenu, u.selectedMenu]);

export const goToPrevMenuAction = createAction<BotContext>(
  `go back`,
  async (context) => {
    swapUserMenus(fakeUser);
    context.send(`Welcome to ${fakeUser.selectedMenu}`);
  }
);
