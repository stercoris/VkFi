import { ComponentOutput } from "core/factory/factory";

export type OutputFunctional = ComponentOutput<
  "functional",
  Promise<unknown>[] | Promise<unknown>
>;
export type OutputFunctionalResolved = ComponentOutput<
  "functional",
  unknown[] | unknown
>;

export type FunctionalParser = (
  func: Function,
  props: Object,
  ...children: unknown[]
) => OutputFunctional;

export const ParseFunctionalCommponent: FunctionalParser = (
  func,
  props,
  ...children
) => ({ type: "functional", content: func({ children, ...props }) });
