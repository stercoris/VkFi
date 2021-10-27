import { RootMiddleware } from "@Root";
import { VK } from "vk-io";
import { Config } from "@Config";
import { subscribeToChangesInNetwork } from "@Utils/wifiParser";

const vk = new VK({
  token: Config.TOKEN,
  pollingGroupId: Config.GROUP_ID,
});

(async () => {
  vk.updates.on("message_new", RootMiddleware);
  subscribeToChangesInNetwork(vk);

  vk.updates.start();
})();
