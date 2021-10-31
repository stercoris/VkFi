import R1IO from "r1-io";
import { ArrowButton } from "./ArrowButtons";
import { ButtonColor } from "vk-io";
import { msToTime } from "@Components/TimePicker/timeHepler";
import { changeIntervalTime } from "@Actions/intervalTime";
import { BotContext } from "@Root";

export const TimePickerFragmentRows: R1IO.FC<BotContext> = ({ user }) => {
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
          label={`WiFi Интервал:  ${pullIntevalParsed}`}
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
