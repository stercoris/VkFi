import { changeIntervalTime } from "@Actions/intervalTime";
import { changeMailingTime } from "@Actions/mailingTime";
import R1IO from "r1-io";

interface ArrowButtonsProps {
  difTime: { left: number; right: number };
  symbol: string;
  color: JSX.ButtonColor;
}

export const ArrowButtonsRow: R1IO.FC<ArrowButtonsProps> = ({
  difTime: { left, right },
  symbol,
  color,
}) => (
  <row>
    <button onClick={changeIntervalTime(left)} color={color}>
      {symbol}
    </button>
    <button onClick={changeMailingTime(right)} color={color}>
      {symbol}
    </button>
  </row>
);
