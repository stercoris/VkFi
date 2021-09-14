import { fakeUser, BotContext } from "bot/rootMiddleware";
import { createParametarizedAction } from "R1IO";

//TODO: WTF? REDO
const changeUserSubscriptionTime = (
  dayTime: "morning" | "evening",
  time: number
) => {
  dayTime === "evening"
    ? (fakeUser.eveningMailingTime += time)
    : (fakeUser.morningMailingTime += time);
};

export const changeEveningSubscribtionTime = createParametarizedAction<
  BotContext,
  number
>("change user mailing evening time", async (time, context) => {
  changeUserSubscriptionTime("evening", time);
  context.send("Your evening time was changed");
});

export const changeMorningSubscribtionTime = createParametarizedAction<
  BotContext,
  number
>("change user mailing morning time", async (time, context) => {
  changeUserSubscriptionTime("morning", time);
  context.send("Your morning time was changed");
});
