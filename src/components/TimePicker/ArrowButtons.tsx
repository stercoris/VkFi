import R1IO from "r1-io";
import { ButtonColor } from "vk-io";

interface ArrowButtonsProps {
  action: JSX.ActionPayload;
  direction: "up" | "down";
  color: ButtonColor;
}

export const ArrowButton: R1IO.FC<ArrowButtonsProps> = ({
  action,
  direction,
  color,
}) => (
  <button
    onClick={action}
    color={color}
    label={direction === "down" ? "▼" : "▲"}
  />
);
