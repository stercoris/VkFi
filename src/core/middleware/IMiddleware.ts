import { NextMiddleware } from "middleware-io";

type MaybePromise = Promise<unknown> | unknown;

export type SimpleAction<I, O> = (context: I, props: O) => MaybePromise;
export type ParameterizedSimpleAction<P, I, O> = (
  props: P,
  context: I,
  keyboardBuilderProps: O
) => MaybePromise;

export type IMiddleware<InputContext, OutputContext> = (
  context: InputContext,
  next: NextMiddleware
) => Promise<OutputContext>;
