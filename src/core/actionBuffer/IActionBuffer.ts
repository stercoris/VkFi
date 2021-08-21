import { MessageContext } from "vk-io";

export type FindAndCall<P, C> = (params: {
  actionName: string;
  actionParams: P;
  context: MessageContext;
  internalContext: C;
}) => Promise<boolean>;

export interface IActionBuffer<InternalContext, T> {
  findAndCall: FindAndCall<T, InternalContext>;
}
