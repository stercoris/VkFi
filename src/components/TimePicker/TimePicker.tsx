import { ArrowButtonsRow } from "./ArrowButtons";
import { User } from "@Entities/User";
import R1IO from "r1-io";
import { ButtonColor } from "vk-io";
import { msToTime } from "@Components/TimePicker/timeHepler";

interface TimePickerProps {
  user: User;
}

export const TimePickerFragmentRows: R1IO.FC<TimePickerProps> = async ({
  user,
}) => {
  const pullIntevalParsed = msToTime(user.pullInteval);
  const mailingIntevalParsed = msToTime(user.mailingInterval);
  return (
    <>
      <ArrowButtonsRow
        difTime={{ left: 60000, right: 60000 * 60 }}
        symbol="▲"
        color={ButtonColor.PRIMARY}
      />
      <row>
        <button
          color={ButtonColor.SECONDARY}
          label={`Interval:  ${pullIntevalParsed}`}
        />
        <button
          color={ButtonColor.SECONDARY}
          label={`Mailing time:  ${mailingIntevalParsed}`}
        />
      </row>
      <ArrowButtonsRow
        difTime={{ left: -60000, right: -60000 * 60 }}
        symbol="▼"
        color={ButtonColor.PRIMARY}
      />
    </>
  );
};
