import JSX from "./core/factory/JSX";
import { Row } from "./core/components/row/row";
import { ButtonColor } from "vk-io";
import { Menu } from "./core/components/menu/menu";

interface User {
  subscribed: boolean;
  username: string;
  selectedWeek: "Red" | "Green";
}

const MainMenu = ({ selectedWeek, subscribed }: User) => {
  return (
    <Menu>
      <Row>
        <button label={"Schedule"} color={ButtonColor.POSITIVE} />
        <button
          label={`${selectedWeek} week`}
          color={
            selectedWeek === "Green"
              ? ButtonColor.POSITIVE
              : ButtonColor.NEGATIVE
          }
        />
      </Row>
      <Row>
        {subscribed ? (
          <button label="Unsubscribe" color={ButtonColor.NEGATIVE} />
        ) : (
          <button label="Subscribe" color={ButtonColor.POSITIVE} />
        )}
      </Row>
    </Menu>
  );
};

function log(keyboard: string) {
  console.log(keyboard);
}

log(MainMenu({ selectedWeek: "Green", subscribed: false, username: "Dima" }));
