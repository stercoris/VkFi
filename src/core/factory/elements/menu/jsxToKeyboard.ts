import { Keyboard, KeyboardBuilder } from "vk-io";

export interface RawKeyboard {
  menu: JSX.MenuPayload;
}

const buttonPayloadToIKeyboardProxyButton = (b: JSX.ButtonPayload) =>
  Keyboard.textButton(b);

export const menuToKeyboardBuilder = ({
  menu,
}: RawKeyboard): KeyboardBuilder => {
  const buttons = menu.map((r) => r.map(buttonPayloadToIKeyboardProxyButton));

  return Keyboard.keyboard(buttons);
};
