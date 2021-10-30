import { POLLING } from "@Actions/intervalTime";
import { BotContext } from "@Root";
import { createParametarizedAction } from "r1-io";

const userTakesStepDown = (unterval: number, diff: number) =>
  unterval > 60000 && unterval + diff < 60000;

const userTakesStepUp = (unterval: number, diff: number) =>
  unterval < 60000 && unterval + diff > 60000;

// Pls do not review this code
export const changeIntervalTime = createParametarizedAction<BotContext, number>(
  POLLING.CHANGE_TIME,
  async (timeDif, { send }, { user }) => {
    if (
      (userTakesStepUp(user.pullInteval, timeDif) ||
        userTakesStepDown(user.pullInteval, timeDif)) &&
      user.pullInteval !== 60000
    ) {
      user.pullInteval = 60000;
    } else if (user.pullInteval + timeDif / 6 < 0) {
      return;
    } else if (user.pullInteval + timeDif < 60000) {
      user.pullInteval += timeDif / 6;
    } else {
      user.pullInteval += timeDif;
    }
    user.save();
    send("Ваш интервал проверки был изменен");
  }
);
