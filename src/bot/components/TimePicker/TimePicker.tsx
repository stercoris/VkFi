import { User } from "index";
import R1IO from "R1IO";

interface TimePickerProps {
  user: User;
}

export const TimePickerFragment: React.FC<TimePickerProps> = ({ user }) => (
  <>
    <row>
      <button>/\</button>
      <button>/\</button>
    </row>
    <row>
      <button>{`${user.morningMailingTime}:00`}</button>
      <button>{`${user.eveningMailingTime}:00`}</button>
    </row>
    <row>
      <button>\/</button>
      <button>\/</button>
    </row>
  </>
);
