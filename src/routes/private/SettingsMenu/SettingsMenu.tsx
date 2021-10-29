import R1IO from "r1-io";
import { BotContext } from "@Root";
import { TimePickerFragmentRows } from "@Components/TimePicker/TimePicker";
import { NavigationButton } from "@Components/Helpers/NavigationButton";
import { Menus } from "@Routes/private";

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
