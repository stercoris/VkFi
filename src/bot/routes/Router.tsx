import { User } from "IUser";
import { MailingMenu } from "./public/student/MaillingMenu/MailingMenu";
import { MainMenu } from "./public/student/MainMenu/MainMenu";

export interface RouterProps {
  user: User;
}

export enum Menus {
  MainMenu = "Main",
  MailingMenu = "Mailing",
}

export const Router: React.FC<RouterProps> = ({ user }) => {
  const selectedMenu = new Map<Menus, React.FC<{ user: User }>>([
    [Menus.MailingMenu, MailingMenu],
    [Menus.MainMenu, MainMenu],
  ]).get(user.selectedMenu);

  if (!selectedMenu) throw new Error("Menu not found ");

  return selectedMenu({ user });
};
