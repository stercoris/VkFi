type MenuOrRow<PropsType> = (props: PropsType) => JSX.ButtonPayload;

export const JSX = {
  createElement<T extends { [id: string]: string }>(
    name: string,
    props: T,
    ...content: string[]
  ) {
    // console.log(content);
    if (name === "button") return props;
    else return content;
  },
};

export default JSX;
