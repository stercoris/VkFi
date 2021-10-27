import { ArrowButtonsRow } from "./ArrowButtons";
import { User } from "IUser";
import R1IO from "r1-io";
import { ButtonColor } from "vk-io";

interface TimePickerProps {
  user: User;
}

export const TimePickerFragmentRows: R1IO.FC<TimePickerProps> = async ({
  user,
}) => {
  return (
    <>
      <ArrowButtonsRow difTime={1} symbol="▲" color={ButtonColor.PRIMARY} />
      <row>
        <button
          color={ButtonColor.SECONDARY}
        >{`Interval:  ${user.pullInteval}:00`}</button>

        <button
          color={ButtonColor.SECONDARY}
        >{`Mailing time:  ${user.mailingInterval}:00`}</button>
      </row>
      <ArrowButtonsRow difTime={-1} symbol="▼" color={ButtonColor.PRIMARY} />
    </>
  );
};
