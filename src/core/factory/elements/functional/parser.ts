import { R1Node } from "core/factory/factory";

export type FunctionalParser = (
  func: Function,
  props: Object,
  ...children: unknown[]
) => R1Node;

export const ParseFunctionalCommponent: FunctionalParser = (
  func,
  props,
  ...children
) => ({ type: "functional", content: func({ children, ...props }) });
