import { KeyboardBuilder } from "vk-io";

export type IBuilder<C> = (context: C) => KeyboardBuilder;
