import { fakeUser, RouterProps } from "bot/rootMiddleware";
import { createParametarizedAction } from "core/action/createAction";

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
  RouterProps,
  number
>("change user mailing evening time", async (time, context) => {
  changeUserSubscriptionTime("evening", time);
  context.send("Your evening time was changed");
});

export const changeMorningSubscribtionTime = createParametarizedAction<
  RouterProps,
  number
>("change user mailing morning time", async (time, context) => {
  changeUserSubscriptionTime("morning", time);
  context.send("Your morning time was changed");
});
