import { NextMiddleware } from "middleware-io";

type NoContextChangeFunc = Promise<unknown> | unknown;
export type SimpleAction<I, O> = (context: I, props: O) => NoContextChangeFunc;

export type ContextWorker<InputContext, OutputContext> = (
  context: InputContext,
  next: NextMiddleware
) => Promise<OutputContext>;

export interface IMiddleware<InputContext, OutputContext> {
  createAction: (
    name: string,
    action: SimpleAction<InputContext, OutputContext>
  ) => JSX.ActionPayload;
  middleware: ContextWorker<InputContext, OutputContext>;
}
