import { ButtonColor } from "vk-io";
import { TimePickerFragment } from "@Components/TimePicker/TimePicker";
import R1IO from "R1IO";
import { User } from "IUser";
import { GoBackButton } from "@Components/GoBackButton/GoBackButton";
import { subscribe, unsubscribe } from "bot/actions/subscribeToMailingActions";
import { Menus } from "bot/routes/Router";
import { goToMenuAction } from "bot/actions/goBackNavigationAction";

interface MailingMenuProps {
  user: User;
}

export const MailingMenu: React.FC<MailingMenuProps> = ({ user }) => (
  <menu>
    <row>
      {user.subscribed ? (
        <button onClick={unsubscribe} color={ButtonColor.NEGATIVE}>
          Unsubscribe
        </button>
      ) : (
        <button onClick={subscribe} color={ButtonColor.POSITIVE}>
          Subscribe
        </button>
      )}
    </row>
    <TimePickerFragment user={user} />
    <row>
      <button onClick={goToMenuAction.setup(Menus.MainMenu)}>
        MailingMenu
      </button>
    </row>
  </menu>
);
