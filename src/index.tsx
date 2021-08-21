import { RootMiddleware } from "bot/rootMiddleware";
import { VK } from "vk-io";
import { Config } from "config/Config";

const vk = new VK({
  token: Config.TOKEN,
  pollingGroupId: Config.GROUP_ID,
});

const beautyLog = (message: string) =>
  console.log("\x1b[31m", "Новое сообщение: ", "\x1b[0m", message);

(async () => {
  vk.updates.on("message_new", async (context, next) => {
    RootMiddleware(context, next);
    beautyLog(JSON.stringify(context.text));
  });

  vk.updates.start();
})();
