import R1IO from "r1-io";
import { ButtonColor } from "vk-io";
import { BotContext, Menus } from "bot/rootMiddleware";
import { sendWifiInfoAction } from "bot/actions/sendWifiInfoAction";
import { NavigationButton } from "bot/modules/Helpers/NavigationButton";

export const MainMenu: R1IO.FC<BotContext> = () => {
  return (
    <menu>
      <row>
        <button onClick={sendWifiInfoAction()} color={ButtonColor.POSITIVE}>
          Информация по девайсам
        </button>
      </row>
      <row>
        <NavigationButton menu={Menus.SettingsMenu}>Настройки</NavigationButton>
      </row>
    </menu>
  );
};
