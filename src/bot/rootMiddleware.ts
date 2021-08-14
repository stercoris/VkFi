import { Menus, Router } from "bot/routes/Router";
import { User } from "IUser";
import { Middleware } from "R1IO";
import { MessageContext } from "vk-io";

export const fakeUser: User = {
  selectedWeek: "Green",
  subscribed: true,
  username: "Dima",
  eveningMailingTime: 18,
  morningMailingTime: 8,
  selectedMenu: Menus.MailingMenu,
};

export const RootMiddleware = Middleware(Router, async (context) => {
  return { user: fakeUser };
});

const createSubscribeToMailingAction = (isSubscrubed: boolean) =>
  RootMiddleware.createAction(async (context, { user }) => {
    fakeUser.subscribed = isSubscrubed;
    context.send(isSubscrubed ? "You are subscribed" : "You are unsubscribed");
  });

export const unsubscribe = createSubscribeToMailingAction(false);
export const subscribe = createSubscribeToMailingAction(true);

const createTimerAction = (time: number, dayTime: "morhing" | "evening") =>
  RootMiddleware.createAction(async (context, { user }) => {
    dayTime === "evening"
      ? (fakeUser.eveningMailingTime += time)
      : (fakeUser.morningMailingTime += time);
    context.send("SAS");
  });

export const addOneHourEveneng = createTimerAction(1, "evening");
export const substractOneHourEveneng = createTimerAction(-1, "evening");
export const addOneHourMorning = createTimerAction(1, "morhing");
export const substractOneHourMorning = createTimerAction(-1, "morhing");
