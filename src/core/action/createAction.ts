import { ParameterizedSimpleAction } from "core/middleware/IMiddleware";
import { MessageContext } from "vk-io";

interface ActionPayload<T> {
  name: string;
  params: T;
}

export interface IAction<KeyboardBuilderContext, T> {
  do: ParameterizedSimpleAction<T, MessageContext, KeyboardBuilderContext>;
  name: string;
}

export const actions: IAction<any, any>[] = [];

const checkIfActionAlreadyExist = (name: string) => {
  const isActionExists = actions.find((a) => a.name === name) !== undefined;
  return isActionExists;
};

export const createAction = <KeyboardBuilderContext, T = {}>(
  name: string,
  action: ParameterizedSimpleAction<T, MessageContext, KeyboardBuilderContext>
): ((params: T) => ActionPayload<T>) => {
  const setup = (params: T): ActionPayload<T> => ({ name, params });

  if (checkIfActionAlreadyExist(name)) {
    throw new Error(`Action with name "${name}" already exist`);
  }

  actions.push({ do: action, name });

  return setup;
};
