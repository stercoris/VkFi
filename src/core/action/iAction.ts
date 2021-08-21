import { MessageContext } from "vk-io";

export interface ActionPayload<T> {
  name: string;
  params: T;
}

type MaybePromise = Promise<unknown> | unknown;

export type ParameterizedAction<P, O> = (
  props: P,
  context: MessageContext,
  keyboardBuilderProps: O
) => MaybePromise;

export type PayloadCreateFunc<T> = (args: T) => ActionPayload<T>;

export type SimpleAction<I, O> = (context: I, props: O) => MaybePromise;

export interface IAction<KeyboardBuilderContext, T> {
  do: ParameterizedAction<T, KeyboardBuilderContext>;
  name: string;
}
