import { Keyboard, KeyboardBuilder } from "vk-io";

export interface RawKeyboard {
  menu: JSX.MenuPayload;
}

export const menuToKeyboardBuilder = ({
  menu,
}: RawKeyboard): KeyboardBuilder => {
  const buttonPayloadToIKeyboardProxyButton = (b: JSX.ButtonPayload) =>
    Keyboard.textButton(b);

  const buttons = menu.map((r) => r.map(buttonPayloadToIKeyboardProxyButton));

  return Keyboard.keyboard(buttons);
};
