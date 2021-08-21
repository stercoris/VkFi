import {
  IAction,
  ParameterizedAction,
  SimpleAction,
} from "core/action/iAction";
import { FindAndCall, IActionBuffer } from "core/actionBuffer/IActionBuffer";

export const createActionBuffer = <InternalContext>(
  ...actions: IAction<InternalContext, any>[]
): IActionBuffer<InternalContext, any> => {
  const findAndCall: FindAndCall<any, InternalContext> = async ({
    actionPayload,
    context,
    internalContext,
  }) => {
    const { name, type, params } = actionPayload;

    const action = actions.find((a) => a.name === name);
    if (!action) return false;

    if (type === "parameterizedAction") {
      const parameterizedAction = action.do as ParameterizedAction<
        any,
        InternalContext
      >;
      await parameterizedAction(params, context, internalContext);
    } else {
      const simpleAction = action.do as SimpleAction<InternalContext>;
      await simpleAction(context, internalContext);
    }

    return true;
  };

  return { findAndCall };
};
