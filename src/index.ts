import "reflect-metadata";
import { RootMiddleware } from "@Root";
import { VK } from "vk-io";
import { Config } from "@Config";
import { WiFiService } from "@Utils/wifiParser";
import { randomInt } from "crypto";
import { createConnection } from "typeorm";
import { Device } from "@Entities/Device";

const vk = new VK({
  token: Config.TOKEN,
  pollingGroupId: Config.GROUP_ID,
});

const prettifyNewDeviceMessage = (d: Device): string =>
  `DEVICE: ${d.name} WITH IP: ${d.ip} ${
    d.connected ? "Connected" : "Disconnected"
  } \n`;

const sendMessage = (message: string) =>
  vk.api.messages.send({
    user_id: Config.MASTER_ID,
    message: message,
    random_id: randomInt(281474976710655),
  });

(async () => {
  await createConnection();
  vk.updates.on("message_new", RootMiddleware);

  WiFiService.start();
  WiFiService.onNewDevicesFinded(
    (devices) =>
      devices.length &&
      sendMessage(devices.map(prettifyNewDeviceMessage).join(""))
  );

  vk.updates.start();
})();
