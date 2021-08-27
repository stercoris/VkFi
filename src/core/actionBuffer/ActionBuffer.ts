import {
  IAction,
  ParameterizedAction,
  SimpleAction,
} from "core/action/iAction";
import { FindAndCall, IActionBuffer } from "core/actionBuffer/IActionBuffer";

export const createActionBuffer = <InternalContext>(
  ...actions: IAction<InternalContext, any>[]
): IActionBuffer<InternalContext> => {
  const findAndCall: FindAndCall<InternalContext> = async (
    payload,
    { context, builderContext }
  ) => {
    const { name, type, params } = payload;

    const action = actions.find((a) => a.name === name);
    if (!action) return false;

    if (type === "parameterizedAction") {
      const parameterizedAction = action.do as ParameterizedAction<
        any,
        InternalContext
      >;
      await parameterizedAction(params, context, builderContext);
    } else {
      const simpleAction = action.do as SimpleAction<InternalContext>;
      await simpleAction(context, builderContext);
    }

    return true;
  };

  return { findAndCall };
};
