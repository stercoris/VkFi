import { IAction } from "core/action/createAction";
import {
  ContextWorker,
  IMiddleware,
  ParameterizedSimpleAction,
  SimpleAction,
} from "core/middleware/IMiddleware";
import {
  IMessageContextSendOptions,
  KeyboardBuilder,
  MessageContext,
} from "vk-io";

export const Middleware = <
  JSXComponentProps,
  InputContext extends MessageContext = MessageContext,
  OutputContext extends JSXComponentProps = JSXComponentProps
>(
  keyboardBuilder: React.FC<JSXComponentProps>,
  actions: IAction<OutputContext, any>[],
  contextWorker: ContextWorker<InputContext, OutputContext>
): IMiddleware<InputContext, OutputContext> => {
  const middleware: ContextWorker<InputContext, OutputContext> = async (
    context,
    next
  ) => {
    const ouptutContext = await contextWorker(context, next);

    const oldSend = context.send;
    context.send = async (text: string) => {
      const params: IMessageContextSendOptions = {
        keyboard: keyboardBuilder(ouptutContext) as unknown as KeyboardBuilder,
      };
      return await oldSend.bind(context)(text, params);
    };

    const payload = context.messagePayload as JSX.ActionPayload;

    console.log(payload);
    if (payload) {
      const action = actions.find((a) => a.name === payload.name);

      if (action) {
        action.do(payload.params, context, ouptutContext);
      } else {
        await context.send("NOOO");
      }
    } else {
      await context.send("NOOO");
    }

    return ouptutContext;
  };

  return { middleware };
};
