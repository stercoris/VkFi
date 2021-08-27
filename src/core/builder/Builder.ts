import {
  BuildKeyboard,
  IBuilder,
  MiddlewareMenuConfig,
} from "core/builder/IBuilder";

type MenuConfig<C> = {
  build: React.FC<C>;
  falldownAction?: JSX.ActionPayload;
};

type EnumToMenu<C, E extends string> = Record<E, MenuConfig<C>>;

export const createBuilder = <C extends {}, E extends string>(
  menuMap: EnumToMenu<C, E>,
  getUserMenu: (context: C) => E
): IBuilder<C> => {
  const getCurrentMenu: IBuilder<C> = (context: C) => {
    const userCurrentMenu = getUserMenu(context);

    for (const [name, menu] of Object.entries<MenuConfig<C>>(menuMap)) {
      if (userCurrentMenu === name) {
        const menuConf: MiddlewareMenuConfig<C> = {
          ...menu,
          build: menu.build as unknown as BuildKeyboard<C>,
        };
        return menuConf;
      }
    }

    throw new Error("MENU NOT FOUND");
  };
  return getCurrentMenu;
};
