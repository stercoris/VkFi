import * as Factory from "./factory/factory";

export default {
  createElement: Factory.createElement,
  Fragment: ({ children }: { children: unknown[] }) =>
    Factory.createElement(null, null, ...(children as string[])),
};
