import { actions } from "core/action/createAction";
import { IBuilder } from "core/builder/IBuilder";
import { IMiddleware } from "core/middleware/IMiddleware";
import { createActionBuffer } from "R1IO";
import { IMessageContextSendOptions } from "vk-io";

export const createMiddleware = <
  JSXComponentProps,
  OutputContext extends JSXComponentProps = JSXComponentProps
>(
  keyboardBuilder: IBuilder<JSXComponentProps>,
  contextWorker: IMiddleware<OutputContext>
): IMiddleware<OutputContext> => {
  const actionsBuffer = createActionBuffer(...actions);
  const middleware: IMiddleware<OutputContext> = async (context, next) => {
    const ouptutContext = await contextWorker(context, next);

    const oldSend = context.send;
    context.send = async (text: string) => {
      const params: IMessageContextSendOptions = {
        keyboard: keyboardBuilder(ouptutContext),
      };
      return await oldSend.bind(context)(text, params);
    };

    const payload = context.messagePayload as JSX.ActionPayload;

    console.log(payload);
    if (!payload) {
      await context.send("Fallback couse no payload was found");
      throw new Error("Fallback couse no payload was found");
    }

    const isActionFound = await actionsBuffer.findAndCall({
      actionPayload: payload,
      context,
      internalContext: ouptutContext,
    });

    if (!isActionFound) {
      await context.send("Fallback couse no action was found");
      throw new Error("Fallback couse no action was found");
    }

    return ouptutContext;
  };

  return middleware;
};
