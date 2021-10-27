import { WIFI } from "@Actions/wifiInfo";
import { BotContext } from "@Root";
import { getDeviceList, prettifyDeviceNames } from "@Utils/wifiParser";
import { createAction } from "r1-io";

export const sendWifiInfoAction = createAction<BotContext>(
  WIFI.SEND_INFO,
  async (context) => {
    context.send("Подождите...");
    const deviceList = prettifyDeviceNames(await getDeviceList());
    context.send(deviceList);
  }
);
