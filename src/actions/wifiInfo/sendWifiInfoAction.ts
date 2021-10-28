import { WIFI } from "@Actions/wifiInfo";
import { BotContext } from "@Root";
import {
  getDeviceList,
  prettifyDeviceNames,
  WiFiService,
} from "@Utils/wifiParser";
import { createAction } from "r1-io";

export const sendWifiInfoAction = createAction<BotContext>(
  WIFI.SEND_INFO,
  async (context) => {
    const deviceList = prettifyDeviceNames(WiFiService.Devices);
    context.send(deviceList);
  }
);
