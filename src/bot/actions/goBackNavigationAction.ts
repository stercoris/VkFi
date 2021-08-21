import { fakeUser } from "bot/rootMiddleware";
import { RouterProps } from "bot/routes/Router";
import { createAction } from "core/action/createAction";

export const goToPrevMenuAction = createAction<RouterProps>(
  `go back`,
  async (context) => {
    const buff = fakeUser.selectedMenu;
    fakeUser.selectedMenu = fakeUser.previousMenu;
    fakeUser.previousMenu = buff;
    context.send(`Welcome to ${fakeUser.selectedMenu}`);
  }
);
