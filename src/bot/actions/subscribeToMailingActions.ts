import { fakeUser } from "bot/rootMiddleware";
import { RouterProps } from "bot/routes/Router";
import { createAction } from "core/action/createAction";

export const subscribeToMailingAction = createAction<RouterProps, boolean>(
  `change user subscribed time`,
  async (subscribed, context) => {
    fakeUser.subscribed = subscribed;
    context.send(subscribed ? "You are subscribed" : "You are unsubscribed");
  }
);

export const unsubscribe = subscribeToMailingAction(false);
export const subscribe = subscribeToMailingAction(true);
