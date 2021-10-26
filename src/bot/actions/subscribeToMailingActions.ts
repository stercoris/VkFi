import { fakeUser, BotContext } from "bot/rootMiddleware";
import { createParametarizedAction } from "r1-io";
import { delay } from "utils/delay";

interface SubscribeToMailingActionProps {
  toSubscribe: boolean;
}

const subscribeToMailingAction = createParametarizedAction<
  BotContext,
  SubscribeToMailingActionProps
>(`change user subscribtion status`, async ({ toSubscribe }, context) => {
  context.send("Hello");

  await delay(1000);

  fakeUser.subscribed = toSubscribe;
  context.send(toSubscribe ? "You are subscribed" : "You are unsubscribed");
});

export const unsubscribe = subscribeToMailingAction({ toSubscribe: false });
export const subscribe = subscribeToMailingAction({ toSubscribe: true });
