import { User } from "index";
import R1IO from "R1IO";

interface GoBackButtonProps {
  user: User;
}

export const GoBackButton: React.FC<GoBackButtonProps> = () => {
  //TODO: THERE WILL BE SOME NAVIGATION LOGIC
  let a = "Back";
  return <button>{a}</button>;
};
