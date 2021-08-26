import { ButtonColor } from "vk-io";
import R1IO from "R1IO";
import { goToPrevMenuAction } from "bot/actions/goBackNavigationAction";
import { BotContext } from "bot/rootMiddleware";

export const MainMenu: React.FC<BotContext> = ({ user: { selectedWeek } }) => (
  <menu>
    <row>
      <button color={ButtonColor.POSITIVE}>Schedule</button>
      <button
        color={
          selectedWeek === "Green" ? ButtonColor.POSITIVE : ButtonColor.NEGATIVE
        }
      >{`${selectedWeek} week`}</button>
    </row>
    <row>
      <button onClick={goToPrevMenuAction()}>BACK</button>
    </row>
  </menu>
);
