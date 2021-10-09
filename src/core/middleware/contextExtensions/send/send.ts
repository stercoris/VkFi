import { BuildKeyboard } from "core/builder/IBuilder";
import { ContextBundle } from "core/middleware/IContextBundle";
import { IMessageContextSendOptions } from "vk-io";

export const applyCustomSend = <C extends {}>(
  build: BuildKeyboard<C>,
  { builderContext, context }: ContextBundle<C>
) => {
  const oldSend = context.send;
  context.send = async (text: string) => {
    const a = await build(builderContext);
    console.log(a["rows"]);
    const params: IMessageContextSendOptions = {
      keyboard: a,
    };
    return await oldSend.bind(context)(text, params);
  };
};
