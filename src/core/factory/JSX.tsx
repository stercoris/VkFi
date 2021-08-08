export const JSX = {
  createElement<T extends { [id: string]: string }>(
    name: "button" | "row" | "menu",
    props: T,
    ...content: string[]
  ) {
    if (name === "button") {
      const button = props as unknown as JSX.ButtonPayload;
      button.label = button.label ?? content[0];
      return button;
    } else return content;
  },
};

export default JSX;
