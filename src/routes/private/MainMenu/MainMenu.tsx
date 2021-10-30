import R1IO from "r1-io";
import { BotContext } from "@Root";
import { NavigationButton } from "@Components/Helpers/NavigationButton";
import { Menus } from "@Routes/private";
import { ButtonColor } from "vk-io";

export const MainMenu: R1IO.FC<BotContext> = () => (
  <menu>
    <row>
      <NavigationButton menu={Menus.DevicesMenu} color={ButtonColor.PRIMARY}>
        Информация по девайсам
      </NavigationButton>
    </row>
    <row>
      <NavigationButton menu={Menus.SettingsMenu} color={ButtonColor.POSITIVE}>
        Настройки
      </NavigationButton>
    </row>
  </menu>
);
