export interface MenuPropsType {
  children: JSX.ButtonPayload[][];
}

export const Menu = ({ children }: MenuPropsType): JSX.ButtonPayload[][] =>
  children;
