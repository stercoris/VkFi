import {
  ActionPayload,
  IAction,
  ParameterizedAction,
  PayloadCreateFunc,
} from "core/action/iAction";
import { MessageContext } from "vk-io";

export const actions: IAction<any, any>[] = [];

const checkIfActionAlreadyExist = (name: string) => {
  const isActionExists = actions.find((a) => a.name === name) !== undefined;
  return isActionExists;
};

export const createParametarizedAction = <KeyboardBuilderContext, T = {}>(
  name: string,
  action: ParameterizedAction<T, KeyboardBuilderContext>
): PayloadCreateFunc<T> => {
  if (checkIfActionAlreadyExist(name)) {
    throw new Error(`Parameterized action with name "${name}" already exist`);
  }

  actions.push({ do: action, name });

  const setup = (params: T): ActionPayload<T> => ({ name, params });

  return setup;
};
