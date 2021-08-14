import { IMiddleware } from "core/middleware/IMiddleware";

export const createAction = <Middleware extends IMiddleware<any, any>>(
  middleware: Middleware,
  action: Parameters<Middleware["createAction"]>[0]
): (() => JSX.ActionPayload) => {
  return () => middleware.createAction(action);
};
