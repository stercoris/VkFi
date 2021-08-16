import { menuToKeyboardBuilder } from "./jsxToKeyboard";
import { KeyboardBuilder } from "vk-io";
import { Row } from "../row/parser";

export type Menu = (Row | Row[])[];

export type MenuParser = (
  name: "menu",
  props: null,
  ...children: Menu
) => KeyboardBuilder;

const insert = <T>(arr: T[], index: number, ...newItems: T[]) => [
  ...arr.slice(0, index),
  ...newItems,
  ...arr.slice(index),
];

export const ParseMenu: MenuParser = (_, __, ...children) => {
  const fragments = children.filter((r) => r[0] instanceof Array) as Row[][];
  for (const fragment of fragments) {
    const fragmentIndex = children.indexOf(fragment);
    delete children[fragmentIndex];
    children = insert(children, fragmentIndex, ...fragment);
  }

  const menuWithoutFragments = children as Row[];

  const menuWithoutUndefinded = menuWithoutFragments.filter(
    (r) => r !== undefined
  );

  const compiledMenu = menuToKeyboardBuilder({
    menu: menuWithoutUndefinded,
  });

  return compiledMenu;
};
