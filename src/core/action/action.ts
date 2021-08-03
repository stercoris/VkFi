import deepcopy from "deepcopy";
import { MessageContext } from "vk-io";
import { TextButton } from "../buttons/textButton";

interface BaseContext extends MessageContext {}

interface NavigationManager {
  goto: (menu: string) => Promise<void>;
  back: () => Promise<void>;
}

type ActionFunc<Context extends BaseContext> = (
  context: Context,
  navigationManager: NavigationManager
) => Promise<void>;

export class Action<Context extends BaseContext = BaseContext> {
  public Name: string;

  constructor({
    name,
    action,
  }: {
    name: string;
    action: ActionFunc<Context>;
  }) {
    this.Name = name;
  }

  public attachButton(button: TextButton): TextButton {
    const connectedButton = deepcopy(button);
    connectedButton.Action = this.Name;
    return connectedButton;
  }
}
