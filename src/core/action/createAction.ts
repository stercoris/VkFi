import { ParameterizedSimpleAction } from "core/middleware/IMiddleware";
import { MessageContext } from "vk-io";

interface ActionPayload<T> {
  name: string;
  params: T;
}

export interface IAction<KeyboardBuilderContext, T> {
  do: ParameterizedSimpleAction<T, MessageContext, KeyboardBuilderContext>;
  setup: (params: T) => ActionPayload<T>;
  name: string;
}

export const createAction = <KeyboardBuilderContext, T = {}>(
  name: string,
  action: ParameterizedSimpleAction<T, MessageContext, KeyboardBuilderContext>
): IAction<KeyboardBuilderContext, T> => {
  const setup = (params: T): ActionPayload<T> => ({ name, params });

  return { do: action, setup, name };
};
