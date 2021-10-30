import { WIFI_SERVICE } from "@Actions/wifiService";
import { BotContext } from "@Root";
import { createParametarizedAction } from "r1-io";

interface WifiServiceCallbacksSet {
  enabled: boolean;
}

export const wifiServiceCallbacksSet = createParametarizedAction<
  BotContext,
  WifiServiceCallbacksSet
>(WIFI_SERVICE.CALLBACKS, async ({ enabled }, { send }, { user }) => {
  user.isNotificationsEnabled = enabled;
  await user.save();
  send(`Уведомления ${enabled ? "включены" : "выключены"}`);
});
