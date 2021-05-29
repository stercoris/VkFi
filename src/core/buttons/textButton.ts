import { ButtonColor, IKeyboardProxyButton, Keyboard } from "vk-io";

export interface IButton {
  label: string;
  color: ButtonColor;
  payload?: {
    command?: string;
    action?: string;
  };
}

type CreateTextButtonFunc<Props> = (args: Props) => IButton | Promise<IButton>;

export class TextButton<Props = void> {
  // some weird shit idk u will get it after some time wathing
  public create: Props extends void
    ? () => IKeyboardProxyButton | Promise<IKeyboardProxyButton>
    : (props: Props) => IKeyboardProxyButton | Promise<IKeyboardProxyButton>;

  public Action: string;
  protected Command: string;

  constructor(createFun: CreateTextButtonFunc<Props> | IButton) {
    const postCreateButton =
      typeof createFun === "function" ? createFun : () => createFun;

    //@ts-ignore
    this.create = async (props: Props) => {
      const button = await postCreateButton(props);

      Object.assign(button, {
        payload: {
          action: this.Action,
          command: this.Command,
        },
      });

      return Keyboard.textButton(button);
    };
  }
}
