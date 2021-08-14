export { Middleware } from "core/middleware/Middleware";
// export { createAction } from "core/action/createAction";
import * as Factory from "./factory/factory";

const R1IO = {
  createElement: Factory.createElement,
  Fragment: ({ children }: { children: unknown[] }) =>
    Factory.createElement(null, null, ...(children as string[])),
};

export default R1IO;
