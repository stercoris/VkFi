import { BuildKeyboard } from "core/builder/IBuilder";
import { ContextBundle } from "core/middleware/IContextBundle";
import { nodeToVkIoKeyboard, unpackContent } from "R1IO";
import { IMessageContextSendOptions } from "vk-io";

export const applyCustomSend = <C extends {}>(
  build: BuildKeyboard<C>,
  { builderContext, context }: ContextBundle<C>
) => {
  const oldSend = context.send;
  context.send = async (text: string) => {
    const keyboard = await build(builderContext);
    const params: IMessageContextSendOptions = { keyboard };
    return await oldSend.bind(context)(text, params);
  };
};
