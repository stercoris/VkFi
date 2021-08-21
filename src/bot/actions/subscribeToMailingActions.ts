import { fakeUser } from "bot/rootMiddleware";
import { RouterProps } from "bot/routes/Router";
import { createParametarizedAction } from "core/action/createAction";

export const subscribeToMailingAction = createParametarizedAction<
  RouterProps,
  boolean
>(`change user subscribed time`, async (subscribed, context) => {
  fakeUser.subscribed = subscribed;
  context.send("Hello");

  setTimeout(() => {
    context.send(subscribed ? "You are subscribed" : "You are unsubscribed");
  }, 1000);
});

export const unsubscribe = subscribeToMailingAction(false);
export const subscribe = subscribeToMailingAction(true);
