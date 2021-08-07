import JSX from "./core/factory/JSX";
import { Row } from "./core/components/row/row";
import { ButtonColor } from "vk-io";
import { Menu } from "./core/components/menu/menu";

interface User {
  subscribed: boolean;
  username: string;
  selectedWeek: "Red" | "Green";
}

function MainMenu({ selectedWeek, username, subscribed }: User) {
  return (
    <Menu>
      <Row>
        <button label={"Schedule"} color={ButtonColor.NEGATIVE} />
        <button label={`${selectedWeek} week`} color={ButtonColor.NEGATIVE} />
      </Row>
      <Row>
        <button
          label={subscribed ? "Unsubscribe" : "Subscribe"}
          color={ButtonColor.NEGATIVE}
        />
        <button label={`${username} profile`} color={ButtonColor.NEGATIVE} />
      </Row>
    </Menu>
  );
}

function log(html: string) {
  console.log(html);
}

log(MainMenu({ selectedWeek: "Green", subscribed: false, username: "Dima" }));
