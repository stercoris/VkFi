export { createMiddleware } from "core/middleware/Middleware";
export { createBuilder } from "core/builder/Builder";
export { createActionBuffer } from "core/actionBuffer/ActionBuffer";
export {
  createAction,
  createParametarizedAction,
} from "core/action/createAction";

import * as Factory from "./factory/factory";

const R1IO = {
  createElement: Factory.createElement,
  Fragment: ({ children }: { children: Factory.R1Node[] }) =>
    Factory.createElement("functional", null, ...children),
};

export default R1IO;
