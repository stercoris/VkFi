import { RootMiddleware } from "bot/rootMiddleware";
import { VK } from "vk-io";
import { Config } from "config/Config";
import { subscribeToChangesInNetwork } from "bot/wifiParser/wifiSubscribtionSecvice";

const vk = new VK({
  token: Config.TOKEN,
  pollingGroupId: Config.GROUP_ID,
});

(async () => {
  vk.updates.on("message_new", RootMiddleware);
  subscribeToChangesInNetwork(vk);

  vk.updates.start();
})();
