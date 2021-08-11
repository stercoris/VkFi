export type FunctionalParser = (
  func: Function,
  props: Object,
  ...children: unknown[]
) => unknown;

export const ParseFunctionalCommponent: FunctionalParser = (
  func,
  props,
  ...children
) => func({ children, ...props });
