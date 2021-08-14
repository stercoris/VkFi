import { fakeUser } from "bot/rootMiddleware";
import {
  ContextWorker,
  IMiddleware,
  SimpleAction,
} from "core/middleware/IMiddleware";
import deepcopy from "deepcopy";
import deepmerge from "deepmerge";
import { menuToKeyboardBuilder } from "jsxToKeyboard";
import { IMessageContextSendOptions, MessageContext } from "vk-io";

type InternalMessageContext = Pick<
  MessageContext,
  "send" | "peerId" | "messagePayload"
>;

export const Middleware = <
  JSXComponentProps,
  InputContext extends MessageContext = MessageContext,
  OutputContext extends JSXComponentProps = JSXComponentProps
>(
  keyboardBuilder: React.FC<JSXComponentProps>,
  contextWorker: ContextWorker<InternalMessageContext, OutputContext>
): IMiddleware<InputContext, OutputContext> => {
  let lastActionId = 0;

  const actions: ({
    do: SimpleAction<InputContext, OutputContext>;
  } & JSX.ActionPayload)[] = [];
  const createAction = (
    action: SimpleAction<InputContext, OutputContext>
  ): JSX.ActionPayload => {
    const actionPayload: JSX.ActionPayload = {
      name: `action #${lastActionId++}`,
    };
    actions.push({ do: action, ...actionPayload });
    return actionPayload;
  };

  const middleware: ContextWorker<InputContext, OutputContext> = async (
    context,
    next
  ) => {
    const ouptutContext = await contextWorker(context, next);

    const oldSend = context.send;
    context.send = async (text: string) => {
      const params: IMessageContextSendOptions = {
        keyboard: menuToKeyboardBuilder({
          menu: keyboardBuilder(ouptutContext) as unknown as JSX.MenuPayload,
        }),
      };
      return await oldSend.bind(context)(text, params);
    };

    const payload = context.messagePayload as JSX.ActionPayload;

    console.log(payload);
    if (payload) {
      const action = actions.find((a) => a.name === payload.name);

      if (action) {
        action.do(context, ouptutContext);
      } else {
        await context.send("NOOO");
      }
    } else {
      await context.send("NOOO");
    }

    return ouptutContext;
  };

  return { createAction, middleware };
};
