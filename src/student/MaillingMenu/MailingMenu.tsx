import { User } from "../../index";
import { ButtonColor } from "vk-io";
import { TimePickerFragment } from "./TimePicker/TimePicker";
import { R1IO } from "../../core/R1IO";

interface MailingMenuProps {
  user: User;
}

export const MailingMenu: React.FC<MailingMenuProps> = ({ user }) => (
  <menu>
    <row>
      {user.subscribed ? (
        <button color={ButtonColor.NEGATIVE}>Unsubscribe</button>
      ) : (
        <button color={ButtonColor.POSITIVE}>Subscribe</button>
      )}
    </row>
    <TimePickerFragment user={user} />
  </menu>
);
