import R1IO from "../../../core/R1IO";
import { User } from "../../../index";

interface GoBackButtonProps {
  user: User;
}

export const GoBackButton: React.FC<GoBackButtonProps> = () => {
  //TODO: THERE WILL BE SOME NAVIGATION LOGIC
  let a = "Back";
  return <button>{a}</button>;
};
