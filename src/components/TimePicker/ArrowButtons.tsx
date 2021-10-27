import { changeIntervalTime } from "@Actions/intervalTime";
import { changeMailingTime } from "@Actions/mailingTime";
import R1IO from "r1-io";

interface ArrowButtonsProps {
  difTime: number;
  symbol: string;
  color: JSX.ButtonColor;
}

export const ArrowButtonsRow: R1IO.FC<ArrowButtonsProps> = ({
  difTime,
  symbol,
  color,
}) => (
  <row>
    <button onClick={changeIntervalTime(difTime)} color={color}>
      {symbol}
    </button>
    <button onClick={changeMailingTime(difTime)} color={color}>
      {symbol}
    </button>
  </row>
);
