import { ParseButton } from "./elements/button/parser";
import { ParseFunctionalCommponent } from "./elements/functional/parser";
import { Menu, ParseMenu } from "./elements/menu/parser";
import { ParseRow, Row } from "./elements/row/parser";

export const createElement = (
  name: string | Function | null,
  props: JSX.ButtonPayload | null,
  ...children: string[] | JSX.ButtonPayload[] | Row[] | Row[][]
) => {
  if (name === "button") {
    return ParseButton(name, props, ...(children as string[]));
  }

  if (name === "row") {
    return ParseRow(name, props as null, ...(children as Row));
  }

  if (name === "menu") {
    return ParseMenu(name, props as null, ...(children as Menu));
  }

  // is functional component
  if (typeof name === "function") {
    return ParseFunctionalCommponent(name, props as Object, ...children);
  }

  return children;
};
