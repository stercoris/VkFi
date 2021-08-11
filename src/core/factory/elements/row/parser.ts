import { Button } from "../button/parser";

export type Row = Button[];

export type RowParser = (name: "row", props: null, ...children: Row) => Row;

export const ParseRow: RowParser = (_, __, ...children) => {
  return children;
};
