import { Middleware } from "R1IO";
import { Menus, Router } from "bot/routes/Router";
import { User } from "IUser";

export const fakeUser: User = {
  selectedWeek: "Green",
  subscribed: true,
  username: "Dima",
  eveningMailingTime: 18,
  morningMailingTime: 8,
  selectedMenu: Menus.MailingMenu,
  previousMenu: Menus.MainMenu,
};

export const RootMiddleware = Middleware(Router, async (context) => {
  return { user: fakeUser };
});

const createTimerAction = (time: number, dayTime: "morhing" | "evening") =>
  RootMiddleware.createAction(`add ${time} to ${dayTime}`, async (context) => {
    dayTime === "evening"
      ? (fakeUser.eveningMailingTime += time)
      : (fakeUser.morningMailingTime += time);
    context.send("SAS");
  });

export const addOneHourEveneng = createTimerAction(1, "evening");
export const substractOneHourEveneng = createTimerAction(-1, "evening");
export const addOneHourMorning = createTimerAction(1, "morhing");
export const substractOneHourMorning = createTimerAction(-1, "morhing");

const createSubscribeToMailingAction = (isSubscrubed: boolean) =>
  RootMiddleware.createAction(
    `set user subsribtion to ${isSubscrubed}`,
    async (context) => {
      fakeUser.subscribed = isSubscrubed;
      context.send(
        isSubscrubed ? "You are subscribed" : "You are unsubscribed"
      );
    }
  );

export const unsubscribe = createSubscribeToMailingAction(false);
export const subscribe = createSubscribeToMailingAction(true);

export const goBackAction = RootMiddleware.createAction(
  `go back`,
  async (context) => {
    const buff = fakeUser.previousMenu;
    fakeUser.previousMenu = fakeUser.selectedMenu;
    fakeUser.selectedMenu = buff;
    context.send("Go back action");
  }
);
