import { goToMenuAction } from "bot/actions/navigationAction";
import { Menus } from "bot/rootMiddleware";
import R1IO from "r1-io/dist";
import { ButtonColor } from "r1-io/node_modules/vk-io";

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
