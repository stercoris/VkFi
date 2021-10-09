import { ComponentOutput } from "core/factory/factory";
import { OutputButton } from "../button/parser";

export type OutputRow = ComponentOutput<"row", Promise<OutputButton>[]>;
export type OutputRowResolved = ComponentOutput<"row", OutputButton[]>;

export type RowParser = (
  name: "row",
  props: null,
  ...children: Promise<OutputButton>[]
) => OutputRow;

export const ParseRow: RowParser = (_, __, ...children) => ({
  type: "row",
  content: children,
});
