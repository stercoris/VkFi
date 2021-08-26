import R1IO from "R1IO";
import { ButtonColor } from "vk-io";
import { TimePickerFragment } from "@Components/TimePicker/TimePicker";
import { subscribe, unsubscribe } from "bot/actions/subscribeToMailingActions";
import { goToPrevMenuAction } from "bot/actions/goBackNavigationAction";
import { BotContext } from "bot/rootMiddleware";

export const MailingMenu: React.FC<BotContext> = ({ user }) => (
  <menu>
    <row>
      {user.subscribed ? (
        <button onClick={unsubscribe} color={ButtonColor.NEGATIVE}>
          Unsubscribe
        </button>
      ) : (
        <button onClick={subscribe} color={ButtonColor.POSITIVE}>
          Subscribe
        </button>
      )}
    </row>
    <TimePickerFragment user={user} />
    <row>
      <button onClick={goToPrevMenuAction()}>BACK</button>
    </row>
  </menu>
);
