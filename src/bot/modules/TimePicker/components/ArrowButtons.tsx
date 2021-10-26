import {
  changeIntervalTime,
  changeMailingTime,
} from "bot/modules/TimePicker/actions/timerAction";
import R1IO from "r1-io/dist";

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
