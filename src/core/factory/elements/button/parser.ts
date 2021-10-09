import { ComponentOutput } from "core/factory/factory";
import { ButtonColor } from "vk-io";

export type Button = JSX.ButtonProps;

export type OutputButton = ComponentOutput<"button", JSX.ButtonProps>;

export type CreateButton = (
  name: "button",
  props: Button | null,
  ...children: string[]
) => OutputButton;

export const ParseButton: CreateButton = (_, props, children) => {
  // base button component

  const button: JSX.ButtonPayload = {
    label: props?.label ?? children,
    color: props?.color ?? ButtonColor.PRIMARY,
    payload: props?.onClick,
  };

  return { type: "button", content: button };
};
