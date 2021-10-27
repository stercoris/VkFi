import { NAVIGATION } from "@Actions/navigation";
import { fakeUser, BotContext, Menus } from "@Root";
import { createParametarizedAction } from "r1-io";

// const swapUserMenus = (u: User) =>
//   ([u.selectedMenu, u.previousMenu] = [u.previousMenu, u.selectedMenu]);

export const goToMenuAction = createParametarizedAction<BotContext, Menus>(
  NAVIGATION.GO_TO_MENU,
  async (menu, { send }, { user }) => {
    user.previousMenu = user.selectedMenu;
    user.selectedMenu = menu;
    send(`Welcome to ${fakeUser.selectedMenu}`);
  }
);
