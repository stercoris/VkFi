import { BotContext } from "bot/rootMiddleware";
import { getDeviceListPrettifed } from "bot/wifiParser/wifiParser";
import { createAction } from "R1IO";

export const sendWifiInfoAction = createAction<BotContext>(
  `get devices info`,
  async (context) => {
    const deviceList = await getDeviceListPrettifed();

    context.send(deviceList);
  }
);
