import R1IO from "R1IO";
import { ButtonColor } from "vk-io";

interface GoBackButtonProps {}

export const GoBackButton: React.FC<GoBackButtonProps> = () => {
  return <button color={ButtonColor.NEGATIVE}>BACK</button>;
};
