import { R1IO } from "../../../core/R1IO";
import { User } from "../../../index";

interface TimePickerProps {
  user: User;
}
export const TimePickerFragment = ({ user }: TimePickerProps) => (
  <>
    <row>
      <button>/\</button>
      <button>/\</button>
    </row>
    <row>
      <button>{user.morningMailingTime + ":00"}</button>
      <button>{user.eveningMailingTime + ":00"}</button>
    </row>
    <row>
      <button>\/</button>
      <button>\/</button>
    </row>
  </>
);
