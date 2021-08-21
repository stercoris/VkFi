import { NextMiddleware } from "middleware-io";

export type IMiddleware<InputContext, OutputContext> = (
  context: InputContext,
  next: NextMiddleware
) => Promise<OutputContext>;
