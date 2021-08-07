export const JSX = {
  createElement(
    name: string,
    props: { [id: string]: string },
    ...content: string[]
  ) {
    console.log(name);
    console.log(props);
    console.log(content);
  },
};

export default JSX;
