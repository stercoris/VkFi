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
  public create: Props extends void
    ? () => IKeyboardProxyButton | Promise<IKeyboardProxyButton>
    : (props: Props) => IKeyboardProxyButton | Promise<IKeyboardProxyButton>;

  private RawCreateButton: (props: Props) => IButton | Promise<IButton>;
  public Action: string;
  protected Command: string;

  constructor(createFun: CreateTextButtonFunc<Props> | IButton) {
    const postCreateButton =
      typeof createFun === "function" ? createFun : () => createFun;

    this.RawCreateButton = postCreateButton;

    //@ts-ignore
    this.create = async (props: Props) => {
      const button = await this.RawCreateButton(props);

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
