import { NAVIGATION } from "@Actions/navigation";
import { BotContext } from "@Root";
import { User } from "@Entities/User";
import { createAction } from "r1-io";

const swapUserMenus = (u: User) =>
  ([u.selectedMenu, u.previousMenu] = [u.previousMenu, u.selectedMenu]);

export const goToPrevMenuAction = createAction<BotContext>(
  NAVIGATION.GO_BACK,
  async (context, { user }) => {
    swapUserMenus(user);
    user.save();
    context.send(`Welcome to ${user.selectedMenu}`);
  }
);
