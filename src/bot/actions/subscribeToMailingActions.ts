import { fakeUser, BotContext } from "bot/rootMiddleware";
import { createParametarizedAction } from "core/action/createAction";

interface SubscribeToMailingActionProps {
  toSubscribe: boolean;
}

const subscribeToMailingAction = createParametarizedAction<
  BotContext,
  SubscribeToMailingActionProps
>(`change user subscribtion status`, async ({ toSubscribe }, context) => {
  context.send("Hello");

  setTimeout(() => {
    fakeUser.subscribed = toSubscribe;
    context.send(toSubscribe ? "You are subscribed" : "You are unsubscribed");
  }, 1000);
});

export const unsubscribe = subscribeToMailingAction({ toSubscribe: false });
export const subscribe = subscribeToMailingAction({ toSubscribe: true });
