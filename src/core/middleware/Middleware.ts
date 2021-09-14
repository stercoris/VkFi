import { actions } from "core/action/createAction";
import { IBuilder } from "core/builder/IBuilder";
import { applyCustomSend } from "core/middleware/contextExtensions/send/send";
import { ContextBundle } from "core/middleware/IContextBundle";
import { IMiddleware } from "core/middleware/IMiddleware";
import { createActionBuffer } from "R1IO";

export const createMiddleware = <
  JSXComponentProps,
  OutputContext extends JSXComponentProps = JSXComponentProps
>(
  getCurrentMenu: IBuilder<JSXComponentProps>,
  contextWorker: IMiddleware<OutputContext>
): IMiddleware<OutputContext> => {
  const actionsBuffer = createActionBuffer(...actions);
  const middleware: IMiddleware<OutputContext> = async (context, next) => {
    const builderContext = await contextWorker(context, next);
    const contextBundle: ContextBundle<OutputContext> = {
      context,
      builderContext,
    };

    const getCurrentMenuAndBuildKeyboard = (context: OutputContext) =>
      getCurrentMenu(context).build(context);

    applyCustomSend(getCurrentMenuAndBuildKeyboard, contextBundle);

    console.log(context.messagePayload);

    const actionStatus = await actionsBuffer.findAndCall(
      context.messagePayload,
      contextBundle
    );

    const { falldownAction } = getCurrentMenu(builderContext);

    if (actionStatus === "PayloadNotFound") {
      if (falldownAction)
        await actionsBuffer.findAndCall(falldownAction, contextBundle);
      else await context.send("Fallback couse no payload was found");
    }

    return builderContext;
  };

  return middleware;
};
