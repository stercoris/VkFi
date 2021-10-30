import { ArrowButton } from "./ArrowButtons";
import { User } from "@Entities/User";
import R1IO from "r1-io";
import { ButtonColor } from "vk-io";
import { msToTime } from "@Components/TimePicker/timeHepler";
import { changeIntervalTime } from "@Actions/intervalTime";

interface TimePickerProps {
  user: User;
}

export const TimePickerFragmentRows: R1IO.FC<TimePickerProps> = async ({
  user,
}) => {
  const pullIntevalParsed = msToTime(user.pullInteval);
  return (
    <>
      <row>
        <ArrowButton
          action={changeIntervalTime(60000)}
          direction="up"
          color={ButtonColor.PRIMARY}
        />
      </row>

      <row>
        <button
          color={ButtonColor.SECONDARY}
          label={`Interval:  ${pullIntevalParsed}`}
        />
      </row>
      <row>
        <ArrowButton
          action={changeIntervalTime(-60000)}
          direction="down"
          color={ButtonColor.PRIMARY}
        />
      </row>
    </>
  );
};
