import { fakeUser } from "bot/rootMiddleware";
import { Menus, RouterProps } from "bot/routes/Router";
import { createAction } from "core/action/createAction";

export const goToMenuAction = createAction<RouterProps, Menus>(
  `go to menu`,
  async (menu, context) => {
    fakeUser.selectedMenu = menu;
    context.send(`Welcome to ${menu}`);
  }
);
