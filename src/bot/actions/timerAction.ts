// import { fakeUser, RootMiddleware } from "bot/rootMiddleware";
// import { createAction } from "R1IO";

// const createTimerAction = (time: number, dayTime: "morhing" | "evening") =>
//   createAction(RootMiddleware, async (context) => {
//     dayTime === "evening"
//       ? (fakeUser.eveningMailingTime += time)
//       : (fakeUser.morningMailingTime += time);
//     context.send("SAS");
//   });

// export const addOneHourEveneng = createTimerAction(1, "evening");
// export const substractOneHourEveneng = createTimerAction(-1, "evening");
// export const addOneHourMorning = createTimerAction(1, "morhing");
// export const substractOneHourMorning = createTimerAction(-1, "morhing");
