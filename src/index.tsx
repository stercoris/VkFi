import { ButtonColor } from "vk-io";
import JSX from "./core/factory/JSX";

interface User {
  subscribed: boolean;
  username: string;
  selectedWeek: "Red" | "Green";
}

const MainMenu: React.FC<User> = ({ selectedWeek, subscribed }) => {
  return (
    <menu>
      <row>
        <button color={ButtonColor.POSITIVE}>Schedule</button>
        <button
          color={
            selectedWeek === "Green"
              ? ButtonColor.POSITIVE
              : ButtonColor.NEGATIVE
          }
        >{`${selectedWeek} week`}</button>
      </row>
      <row>
        {subscribed ? (
          <button color={ButtonColor.NEGATIVE}>Unsubscribe</button>
        ) : (
          <button color={ButtonColor.POSITIVE}>Subscribe</button>
        )}
      </row>
    </menu>
  );
};

function log(keyboard: React.ReactElement<any, any> | null) {
  console.log(keyboard);
}

log(MainMenu({ selectedWeek: "Green", subscribed: false, username: "Dima" }));
