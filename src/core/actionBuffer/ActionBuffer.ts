import { IAction } from "core/action/iAction";
import { FindAndCall, IActionBuffer } from "core/actionBuffer/IActionBuffer";

export const createActionBuffer = <InternalContext>(
  ...actions: IAction<InternalContext, any>[]
): IActionBuffer<InternalContext, any> => {
  const findAndCall: FindAndCall<any, InternalContext> = async ({
    actionName,
    actionParams,
    context,
    internalContext,
  }) => {
    const action = actions.find((a) => a.name === actionName);
    if (!action) return false;

    action.do(actionParams, context, internalContext);

    return true;
  };

  return { findAndCall };
};
