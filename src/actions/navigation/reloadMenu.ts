import { NAVIGATION } from "@Actions/navigation";
import { BotContext } from "@Root";
import { createAction } from "r1-io";

export const reloadMenuAction = createAction<BotContext>(
  NAVIGATION.RELOAD,
  ({ send }) => send(`Refreshed`)
);
