import { IBuilder } from "core/builder/IBuilder";

export const createBuilder = <C extends {}>(jsxFucntion: React.FC<C>) => {
  return jsxFucntion as unknown as IBuilder<C>;
};
