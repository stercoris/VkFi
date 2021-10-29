import { createBuilder, createMiddleware } from "r1-io";
import { User } from "@Entities/User";
import { MainMenu, Menus, SettingsMenu } from "@Routes/private";
import { DevicesMenu } from "@Routes/private/DevicesMenu/DevicesMenu";
import { MessageContext } from "r1-io/node_modules/vk-io";
import { setDeviceName } from "@Actions/setDeviceName";

export interface BotContext {
  user: User;
  context: MessageContext;
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
  ({ user }) => {
    console.log(user.selectedMenu);
    return user.selectedMenu;
  }
);

const beautyLog = (message: string) =>
  console.log("\x1b[31m", "Новое сообщение: ", "\x1b[0m", message);

const findOrCreateNewUser = async (vkId: number) => {
  const user = await User.findOne({ where: { vkId } });
  if (!user) {
    return User.create({
      vkId: vkId,
    }).save();
  }
  return user;
};

export const RootMiddleware = createMiddleware(router, async (context) => {
  beautyLog(JSON.stringify(context.text));

  const user = await findOrCreateNewUser(context.senderId);
  return { user, context };
});
