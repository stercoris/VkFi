import { ButtonColor } from "vk-io";

export type Button = JSX.ButtonPayload;

export type CreateButton = (
  name: "button",
  props: Button | null,
  ...children: string[]
) => JSX.ButtonPayload;

export const ParseButton: CreateButton = (_, props, children) => {
  // base button component

  const buttonProps = props as unknown as JSX.ButtonProps;

  const button: JSX.ButtonPayload = {
    label: buttonProps?.label ?? children,
    color: buttonProps?.color ?? ButtonColor.PRIMARY,
    payload: buttonProps?.onClick,
  };

  return button;
};
