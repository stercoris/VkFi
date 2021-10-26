import { fakeUser, BotContext, Menus } from "bot/rootMiddleware";
import { createParametarizedAction } from "r1-io";

// const swapUserMenus = (u: User) =>
//   ([u.selectedMenu, u.previousMenu] = [u.previousMenu, u.selectedMenu]);

export const goToMenuAction = createParametarizedAction<BotContext, Menus>(
  `go to menu`,
  async (menu, { send }, { user }) => {
    user.previousMenu = user.selectedMenu;
    user.selectedMenu = menu;
    send(`Welcome to ${fakeUser.selectedMenu}`);
  }
);
