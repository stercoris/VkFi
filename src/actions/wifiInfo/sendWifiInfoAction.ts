import { WIFI } from "@Actions/wifiInfo";
import { BotContext } from "@Root";
import { getDeviceListPrettifed } from "@Utils/wifiParser/wifiParser";
import { createAction } from "r1-io";

export const sendWifiInfoAction = createAction<BotContext>(
  WIFI.SEND_INFO,
  async (context) => {
    context.send("Подождите...");
    const deviceList = await getDeviceListPrettifed();
    context.send(deviceList);
  }
);
