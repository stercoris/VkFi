import { Menus, User } from "index";
import { MailingMenu } from "./public/student/MaillingMenu/MailingMenu";
import { MainMenu } from "./public/student/MainMenu/MainMenu";

interface RouterProps {
  user: User;
}

export const Router: React.FC<RouterProps> = ({ user }) => {
  const SelectedMenu = new Map<Menus, React.FC<{ user: User }>>([
    [Menus.MailingMenu, MailingMenu],
    [Menus.MainMenu, MainMenu],
  ]).get(user.selectedMenu);

  if (!SelectedMenu) throw new Error("Menu not found ");

  return SelectedMenu({ user });
};
