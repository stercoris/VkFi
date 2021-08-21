import {
  changeEveningSubscribtionTime,
  changeMorningSubscribtionTime,
} from "bot/actions/timerAction";
import { User } from "IUser";
import R1IO from "R1IO";
import { ButtonColor } from "vk-io";

interface TimePickerProps {
  user: User;
}

export const TimePickerFragment: React.FC<TimePickerProps> = ({ user }) => (
  <>
    <row>
      <button onClick={changeMorningSubscribtionTime(1)}>▲</button>
      <button onClick={changeEveningSubscribtionTime(1)}>▲</button>
    </row>
    <row>
      <button
        color={ButtonColor.SECONDARY}
      >{`${user.morningMailingTime}:00`}</button>
      <button
        color={ButtonColor.SECONDARY}
      >{`${user.eveningMailingTime}:00`}</button>
    </row>
    <row>
      <button onClick={changeMorningSubscribtionTime(-1)}>▼</button>
      <button onClick={changeEveningSubscribtionTime(-1)}>▼</button>
    </row>
  </>
);
