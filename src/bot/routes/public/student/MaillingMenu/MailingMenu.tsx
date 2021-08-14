import { ButtonColor } from "vk-io";
import { TimePickerFragment } from "@Components/TimePicker/TimePicker";
import R1IO from "R1IO";
import { User } from "IUser";
import { subscribe, unsubscribe } from "bot/rootMiddleware";
import { GoBackButton } from "@Components/GoBackButton/GoBackButton";

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
      <GoBackButton />
    </row>
  </menu>
);
