import { MessageContext } from "vk-io";

interface ActionPayload<T> {
  name: string;
  params: T;
}

export interface IAction<KeyboardBuilderContext, T> {
  do: ParameterizedAction<T, MessageContext, KeyboardBuilderContext>;
  name: string;
}

export const actions: IAction<any, any>[] = [];

const checkIfActionAlreadyExist = (name: string) => {
  const isActionExists = actions.find((a) => a.name === name) !== undefined;
  return isActionExists;
};

type MaybePromise = Promise<unknown> | unknown;
type PayloadCreateFunc<T> = (args: T) => ActionPayload<T>;

export type ParameterizedAction<P, I, O> = (
  props: P,
  context: I,
  keyboardBuilderProps: O
) => MaybePromise;

export const createParametarizedAction = <KeyboardBuilderContext, T = {}>(
  name: string,
  action: ParameterizedAction<T, MessageContext, KeyboardBuilderContext>
): PayloadCreateFunc<T> => {
  if (checkIfActionAlreadyExist(name)) {
    throw new Error(`Parameterized action with name "${name}" already exist`);
  }

  actions.push({ do: action, name });

  const setup = (params: T): ActionPayload<T> => ({ name, params });

  return setup;
};

export type SimpleAction<I, O> = (context: I, props: O) => MaybePromise;
