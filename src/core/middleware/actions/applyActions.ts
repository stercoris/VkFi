import { IActionBuffer } from "core/actionBuffer/IActionBuffer";
import { ContextBundle } from "core/middleware/IContextBundle";

type ActionResponse = "ActionNotFound" | "ActionExecuted" | "PayloadNotFound";

export const apllyButtonActions = async <C>(
  actionsBuffer: IActionBuffer<C>,
  contextBundle: ContextBundle<C>
): Promise<ActionResponse> => {
  const { context } = contextBundle;

  const payload = context.messagePayload as JSX.ActionPayload;

  if (!payload) {
    return "PayloadNotFound";
  }

  const isActionFound = await actionsBuffer.findAndCall(payload, contextBundle);

  if (!isActionFound) {
    await context.send("Fallback couse no action was found");
    return "ActionNotFound";
  }

  return "ActionExecuted";
};
