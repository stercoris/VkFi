import { IKeyboardProxyButton, Keyboard, KeyboardBuilder } from "vk-io";

export interface RawKeyboard {
  menu: JSX.MenuPayload;
}

const buttonPayloadToIKeyboardProxyButton = (b: JSX.ButtonPayload) =>
  Keyboard.textButton(b);

export const menuToKeyboardBuilder = async ({
  menu,
}: RawKeyboard): Promise<KeyboardBuilder> => {
  const buildedMenus = await Promise.all(menu);
  const buttons: IKeyboardProxyButton[][] = [];

  let i = 0;
  for (const row of buildedMenus) {
    const buildedRows = await Promise.all(row);

    buttons.push(buildedRows.map(buttonPayloadToIKeyboardProxyButton));
  }
  return Keyboard.keyboard(buttons);
};
