import { ContextBundle } from "core/middleware/IContextBundle";
import { MessageContext } from "vk-io";

export type FindAndCall<C> = (
  payload: JSX.ActionPayload,
  params: ContextBundle<C>
) => Promise<boolean>;

export interface IActionBuffer<C> {
  findAndCall: FindAndCall<C>;
}
