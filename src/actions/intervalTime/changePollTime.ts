import { POLLING } from "@Actions/intervalTime";
import { BotContext } from "@Root";
import { createParametarizedAction } from "r1-io";

export const changeIntervalTime = createParametarizedAction<BotContext, number>(
  POLLING.CHANGE_TIME,
  async (timeDif, { send }, { user }) => {
    user.pullInteval += timeDif;
    send("Your pull inteval time was changed");
  }
);
