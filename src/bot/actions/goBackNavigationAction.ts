import { fakeUser } from "bot/rootMiddleware";
import { Menus, RouterProps } from "bot/routes/Router";
import { createParametarizedAction } from "core/action/createAction";

export const goToMenuAction = createParametarizedAction<RouterProps, Menus>(
  `go to menu`,
  async (menu, context) => {
    fakeUser.selectedMenu = menu;
    context.send(`Welcome to ${Menus[menu]}`);
  }
);
