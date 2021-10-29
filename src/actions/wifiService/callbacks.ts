import { WIFI_SERVICE } from "@Actions/wifiService";
import { BotContext } from "@Root";
import { WiFiService } from "@Utils/wifiParser";
import { createParametarizedAction } from "r1-io";

interface WifiServiceCallbacksSet {
  enabled: boolean;
}

export const wifiServiceCallbacksSet = createParametarizedAction<
  BotContext,
  WifiServiceCallbacksSet
>(WIFI_SERVICE.CALLBACKS, async ({ enabled }, { send }) => {
  WiFiService.isCallbacksRunning = enabled;
  send(`Notifications is ${enabled ? "enabled" : "disabled"}`);
});
