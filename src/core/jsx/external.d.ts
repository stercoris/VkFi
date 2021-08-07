declare module JSX {
  enum ButtonColor {
    SECONDARY = "secondary",
    PRIMARY = "primary",
    NEGATIVE = "negative",
    POSITIVE = "positive",
  }

  export type ButtonPayload = {
    label: string;
    color: ButtonColor;
    payload?: {
      action: string;
      uid: string;
    };
  };
  interface IntrinsicElements {
    [elemName: string]: any;
    button: ButtonPayload;
  }

  interface ElementChildrenAttribute {
    children: {};
  }
}
