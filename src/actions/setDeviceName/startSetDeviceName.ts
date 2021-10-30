import { SET_DEVICE_NAME } from "@Actions/setDeviceName";
import { BotContext } from "@Root";
import { createParametarizedAction } from "r1-io";

export const startSetDeviceName = createParametarizedAction<BotContext, string>(
  SET_DEVICE_NAME.START_SETTING,
  async (deviceIP, { send }, { user }) => {
    user.isSettingDeviceName = deviceIP;
    await user.save();
    send("Отправьте имя девайса");
  }
);
