import { ComponentOutput } from "core/factory/factory";
import { OutputRow } from "../row/parser";

export type OutputMenu = ComponentOutput<"menu", Promise<OutputRow>[]>;
export type OutputMenuResolved = ComponentOutput<"menu", OutputRow[]>;

export type MenuParser = (
  name: "menu",
  props: null,
  ...children: Promise<OutputRow>[]
) => OutputMenu;

export const ParseMenu: MenuParser = (_, __, ...children) => {
  return { type: "menu", content: children };
};
