import { NAVIGATION } from "@Actions/navigation";
import { BotContext } from "@Root";
import { Menus } from "@Routes/private";
import { createParametarizedAction } from "r1-io";

// const swapUserMenus = (u: User) =>
//   ([u.selectedMenu, u.previousMenu] = [u.previousMenu, u.selectedMenu]);

export const goToMenuAction = createParametarizedAction<BotContext, Menus>(
  NAVIGATION.GO_TO_MENU,
  async (menu, { send }, { user }) => {
    user.previousMenu = user.selectedMenu;
    user.selectedMenu = menu;
    user.save();
    send(`Welcome to ${user.selectedMenu}`);
  }
);
