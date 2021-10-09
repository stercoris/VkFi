import { fakeUser, RootMiddleware } from "bot/rootMiddleware";
import { VK } from "vk-io";
import { Config } from "config/Config";
import { subscribeToChangesInNetwork } from "bot/wifiParser/wifiSubscribtionSecvice";
import {
  OutputMenu,
  OutputMenuResolved,
} from "core/factory/elements/menu/parser";
import { OutputRow, OutputRowResolved } from "core/factory/elements/row/parser";
import {
  OutputFunctional,
  OutputFunctionalResolved,
} from "core/factory/elements/functional/parser";
import { OutputButton } from "core/factory/elements/button/parser";
import { MainMenu } from "bot/routes/public/student/MainMenu/MainMenu";
import { unpackContent } from "R1IO";
import * as util from "util";

const vk = new VK({
  token: Config.TOKEN,
  pollingGroupId: Config.GROUP_ID,
});

const haveFunctionalComponent = (
  elements: (
    | OutputMenuResolved
    | OutputRowResolved
    | OutputFunctionalResolved
  )[]
): boolean => elements.findIndex((e) => e.type === "functional") >= 0;

const parseAsyncKeyboard = async (k: { keyboard: OutputMenu }) => {
  // console.log(k);
  const menu = k.keyboard;
  const resolvedMenu = await unpackContent(menu);

  console.log(
    util.inspect(resolvedMenu.content, {
      showHidden: false,
      depth: null,
      colors: true,
    })
  );
};

(async () => {
  // RootMiddleware(
  //   {
  //     //@ts-ignore
  //     send: (s, k) => parseAsyncKeyboard(k),
  //     messagePayload: { name: "go back", type: "action" },
  //   },
  //   () => {}
  // );
  // vk.updates.on("message_new", RootMiddleware);
  // subscribeToChangesInNetwork(vk);

  const sas = await MainMenu({ user: fakeUser });
  //@ts-ignore
  parseAsyncKeyboard({ keyboard: sas });
  vk.updates.start();
})();
