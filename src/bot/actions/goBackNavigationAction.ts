import { fakeUser, BotContext } from "bot/rootMiddleware";
import { createAction } from "core/action/createAction";
import { User } from "IUser";

const swapUserMenus = (u: User) =>
  ([u.selectedMenu, u.previousMenu] = [u.previousMenu, u.selectedMenu]);

export const goToPrevMenuAction = createAction<BotContext>(
  `go back`,
  async (context) => {
    swapUserMenus(fakeUser);
    context.send(`Welcome to ${fakeUser.selectedMenu}`);
  }
);
