import { fakeUser } from "bot/rootMiddleware";
import { RouterProps } from "bot/routes/Router";
import { createAction } from "core/action/createAction";

interface CreateTimerActionProps {
  time: number;
  dayTime: "morhing" | "evening";
}

export const createTimerAction = createAction<
  RouterProps,
  CreateTimerActionProps
>(`change user mailing time`, async ({ dayTime, time }, context) => {
  dayTime === "evening"
    ? (fakeUser.eveningMailingTime += time)
    : (fakeUser.morningMailingTime += time);
  context.send("Your time was changed");
});

export const addOneHourEveneng = createTimerAction({
  time: 1,
  dayTime: "evening",
});
export const substractOneHourEveneng = createTimerAction({
  time: -1,
  dayTime: "evening",
});
export const addOneHourMorning = createTimerAction({
  time: 1,
  dayTime: "morhing",
});
export const substractOneHourMorning = createTimerAction({
  time: -1,
  dayTime: "morhing",
});
