import { createBuilder, createMiddleware } from "r1-io";
import { User } from "@Entities/User";
import { MainMenu, Menus, SettingsMenu } from "@Routes/private";
import { DevicesMenu } from "@Routes/private/DevicesMenu/DevicesMenu";
import { setDeviceName } from "@Actions/setDeviceName";

export interface BotContext {
  user: User;
}

const router = createBuilder<BotContext, Menus>(
  {
    [Menus.MainMenu]: {
      build: MainMenu,
    },
    [Menus.SettingsMenu]: {
      build: SettingsMenu,
    },
    [Menus.DevicesMenu]: {
      build: DevicesMenu,
      fallbackAction: setDeviceName(),
    },
  },
  ({ user }) => user.selectedMenu
);

const beautyLog = (prefix: string, message: string) =>
  console.log("\x1b[31m", `${prefix}: \n`, "\x1b[0m", message);

const findOrCreateNewUser = (vkId: number) =>
  User.findOneOrFail({ where: { vkId } }).catch(() =>
    User.create({ vkId: vkId }).save()
  );

export const RootMiddleware = createMiddleware(router, async (context) => {
  console.log("--------------------");
  beautyLog("Новое сообщение", JSON.stringify(context.text));
  beautyLog("Payload", context.messagePayload ?? "Empty");

  const user = await findOrCreateNewUser(context.senderId);

  if (user.vkId !== (await User.Master).vkId) return;

  return { user, context };
});
