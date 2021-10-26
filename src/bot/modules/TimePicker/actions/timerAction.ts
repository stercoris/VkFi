import { BotContext } from "bot/rootMiddleware";
import { createParametarizedAction } from "r1-io";

export const changeIntervalTime = createParametarizedAction<BotContext, number>(
  "change user's interval time",
  async (timeDif, { send }, { user }) => {
    user.pullInteval += timeDif;
    send("Your pull inteval time was changed");
  }
);

export const changeMailingTime = createParametarizedAction<BotContext, number>(
  "change user's mailing time",
  async (timeDif, { send }, { user }) => {
    user.mailingInterval += timeDif;
    send("Your mailing time time was changed");
  }
);
