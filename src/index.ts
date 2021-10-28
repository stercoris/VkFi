import { RootMiddleware } from "@Root";
import { VK } from "vk-io";
import { Config } from "@Config";
import { WiFiService } from "@Utils/wifiParser";
import { randomInt } from "crypto";
import { DeviceWithStatus } from "@Utils/wifiParser/helpers/getDeviceDifference";

const vk = new VK({
  token: Config.TOKEN,
  pollingGroupId: Config.GROUP_ID,
});

const sendMessage = (message: string) =>
  vk.api.messages.send({
    user_id: Config.MASTER_ID,
    message: message,
    random_id: randomInt(281474976710655),
  });

const prettifyNewDeviceMessage = (d: DeviceWithStatus) =>
  `DEVICE: ${d.device.name} WITH IP: ${d.device.ip} ${d.status} \n`;

(async () => {
  vk.updates.on("message_new", RootMiddleware);

  await WiFiService.init();
  WiFiService.setPollingRate(5000);
  WiFiService.startPolling();

  WiFiService.onNewDevicesFinded((devises) =>
    sendMessage(devises.map(prettifyNewDeviceMessage).join(""))
  );

  vk.updates.start();
})();
