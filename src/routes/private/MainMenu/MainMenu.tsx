import R1IO from "r1-io";
import { BotContext, Menus } from "@Root";
import { NavigationButton } from "@Components/Helpers/NavigationButton";

export const MainMenu: R1IO.FC<BotContext> = () => (
  <menu>
    <row>
      <NavigationButton menu={Menus.DevicesMenu}>
        Информация по девайсам
      </NavigationButton>
    </row>
    <row>
      <NavigationButton menu={Menus.SettingsMenu}>Настройки</NavigationButton>
    </row>
  </menu>
);
