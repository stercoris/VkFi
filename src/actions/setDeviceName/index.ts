import { Device } from "@Entities/Device";
import { BotContext } from "@Root";
import { createAction, createParametarizedAction } from "r1-io";

export const SET_DEVICE_NAME = {
  STOP_SETTING: "stop setting name",
  START_SETTING: "start setting name",
  SET: "set name",
};

export const setDeviceName = createAction<BotContext>(
  SET_DEVICE_NAME.SET,
  async ({ send, text }, { user }) => {
    if (user.isSettingDeviceName) {
      const device = await Device.findOne({
        where: { ip: user.isSettingDeviceName },
      });

      if (!device) throw new Error("Device does not exist");

      device.name = text ?? "Unknown";
      user.isSettingDeviceName = "";

      await user.save();
      await device.save();

      send("Имя девайса успешно изменено");
    }
  }
);

export const startSetDeviceName = createParametarizedAction<BotContext, string>(
  SET_DEVICE_NAME.START_SETTING,
  async (deviceIP, { send }, { user }) => {
    user.isSettingDeviceName = deviceIP;
    await user.save();
    send("Отправьте имя девайса");
  }
);

export const stopSetDeviceName = createAction<BotContext>(
  SET_DEVICE_NAME.STOP_SETTING,
  async (_, { user }) => {
    user.isSettingDeviceName = "";
    await user.save();
  }
);
