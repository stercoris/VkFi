import { OutputButton, ParseButton } from "./elements/button/parser";
import { ParseFunctionalCommponent } from "./elements/functional/parser";
import { ParseMenu } from "./elements/menu/parser";
import { OutputRow, ParseRow } from "./elements/row/parser";

export type ComponentType = "row" | "button" | "functional" | "menu";

export type ComponentOutput<T extends ComponentType, O> = {
  type: T;
  content: O;
};

export const createElement = async (
  name: string | Function | null,
  props: JSX.ButtonProps | null,
  ...children: string[] | Promise<OutputButton>[] | Promise<OutputRow>[]
) => {
  if (name === "button") {
    return ParseButton(name, props, ...(children as string[]));
  }

  if (name === "row") {
    return ParseRow(
      name,
      props as null,
      ...(children as Promise<OutputButton>[])
    );
  }

  if (name === "menu") {
    return ParseMenu(
      name,
      props as null,
      ...(children as Promise<OutputRow>[])
    );
  }

  // is functional component
  if (typeof name === "function") {
    return ParseFunctionalCommponent(name, props as Object, ...children);
  }

  return children;
};
