import R1IO from "r1-io";
import { goToMenuAction } from "@Actions/navigation";
import { ButtonColor } from "vk-io";
import { Menus } from "@Routes/private";

interface NavigationButtonProps {
  menu: Menus;
  color?: ButtonColor;
  children: string;
}

export const NavigationButton: R1IO.FC<NavigationButtonProps> = ({
  children,
  color,
  menu,
}) => (
  <button
    onClick={goToMenuAction(menu)}
    color={color ?? ButtonColor.NEGATIVE}
    label={children}
  />
);
