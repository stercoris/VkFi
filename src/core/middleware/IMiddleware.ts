import { NextMiddleware } from "middleware-io";

type NoContextChangeFunc = Promise<unknown> | unknown;
export type SimpleAction<I, O> = (context: I, props: O) => NoContextChangeFunc;
export type ParameterizedSimpleAction<P, I, O> = (
  props: P,
  context: I,
  keyboardBuilderProps: O
) => NoContextChangeFunc;

export type ContextWorker<InputContext, OutputContext> = (
  context: InputContext,
  next: NextMiddleware
) => Promise<OutputContext>;

export interface IMiddleware<InputContext, OutputContext> {
  middleware: ContextWorker<InputContext, OutputContext>;
}
