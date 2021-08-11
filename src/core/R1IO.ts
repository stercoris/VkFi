import * as Factory from "./factory/factory";

export namespace R1IO {
  export const createElement = Factory.createElement;

  export const Fragment = ({ children }: { children: unknown[] }) =>
    Factory.createElement(null, null, ...(children as string[]));
}
