import { ButtonColor } from "vk-io";
import JSX from "./core/factory/JSX";

interface User {
  subscribed: boolean;
  username: string;
  selectedWeek: "Red" | "Green";
}

const MainMenu = ({ selectedWeek, subscribed }: User) => {
  return (
    <menu>
      <row>
        <button label={"Schedule"} color={ButtonColor.POSITIVE} />
        <button
          label={`${selectedWeek} week`}
          color={
            selectedWeek === "Green"
              ? ButtonColor.POSITIVE
              : ButtonColor.NEGATIVE
          }
        />
      </row>
      <row>
        {subscribed ? (
          <button label="Unsubscribe" color={ButtonColor.NEGATIVE} />
        ) : (
          <button label="Subscribe" color={ButtonColor.POSITIVE} />
        )}
      </row>
    </menu>
  );
};

function log(keyboard: JSX.Element) {
  console.log(keyboard);
}

log(MainMenu({ selectedWeek: "Green", subscribed: false, username: "Dima" }));
