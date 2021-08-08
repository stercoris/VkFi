type MenuOrRow<PropsType> = (props: PropsType) => JSX.ButtonPayload;

export const JSX = {
  createElement<T extends { [id: string]: string }>(
    name: JSX.ButtonPayload | MenuOrRow<T>,
    props: T,
    ...content: string[]
  ) {
    if (typeof name === "function") {
      return name({ ...props, children: content });
    } else return props;
  },
};

export default JSX;
