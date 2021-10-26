import R1IO from "r1-io";
import { BotContext, Menus } from "bot/rootMiddleware";
import { TimePickerFragmentRows } from "bot/modules/TimePicker/components/TimePicker";
import { NavigationButton } from "bot/modules/Helpers/NavigationButton";

export const SettingsMenu: R1IO.FC<BotContext> = ({ user }) => {
  return (
    <menu>
      <TimePickerFragmentRows user={user} />
      <row>
        <NavigationButton menu={Menus.MainMenu}>Назад</NavigationButton>
      </row>
    </menu>
  );
};
