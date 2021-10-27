import R1IO from "r1-io";
import { goToMenuAction } from "actions/navigation";
import { Menus } from "@Root";
import { ButtonColor } from "vk-io";

interface NavigationButtonProps {
  menu: Menus;
  children: string;
}

export const NavigationButton: R1IO.FC<NavigationButtonProps> = ({
  children,
  menu,
}) => (
  <button
    onClick={goToMenuAction(menu)}
    color={ButtonColor.NEGATIVE}
    label={children}
  />
);
