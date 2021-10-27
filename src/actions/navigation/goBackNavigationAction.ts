import { NAVIGATION } from "@Actions/navigation";
import { fakeUser, BotContext } from "@Root";
import { User } from "IUser";
import { createAction } from "r1-io";

const swapUserMenus = (u: User) =>
  ([u.selectedMenu, u.previousMenu] = [u.previousMenu, u.selectedMenu]);

export const goToPrevMenuAction = createAction<BotContext>(
  NAVIGATION.GO_BACK,
  async (context) => {
    swapUserMenus(fakeUser);
    context.send(`Welcome to ${fakeUser.selectedMenu}`);
  }
);
