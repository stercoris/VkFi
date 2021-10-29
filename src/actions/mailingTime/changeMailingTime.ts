import { MAILING } from "@Actions/mailingTime";
import { BotContext } from "@Root";
import { createParametarizedAction } from "r1-io";

export const changeMailingTime = createParametarizedAction<BotContext, number>(
  MAILING.CHANGE_TIME,
  async (timeDif, { send }, { user }) => {
    user.mailingInterval += timeDif;
    user.save();
    send("Your mailing time time was changed");
  }
);
