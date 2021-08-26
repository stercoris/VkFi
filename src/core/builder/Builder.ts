import { IBuilder } from "core/builder/IBuilder";
import { KeyboardBuilder } from "vk-io";

type EnumToMenu<C, E extends string> = Record<E, React.FC<C>>;

export const createBuilder = <C extends {}, E extends string>(
  menuMap: EnumToMenu<C, E>,
  getUserMenu: (context: C) => E
): IBuilder<C> => {
  const getCurrentMenu = (context: C) => {
    const userCurrentMenu = getUserMenu(context);

    for (const [name, menu] of Object.entries<React.FC<C>>(
      menuMap as EnumToMenu<C, E>
    )) {
      if (userCurrentMenu === name) {
        return menu(context) as unknown as KeyboardBuilder;
      }
    }

    throw new Error("MENU NOT FOUND");
  };
  return getCurrentMenu;
};
