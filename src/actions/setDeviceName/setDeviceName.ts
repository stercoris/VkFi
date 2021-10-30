import { SET_DEVICE_NAME } from "@Actions/setDeviceName";
import { Device } from "@Entities/Device";
import { BotContext } from "@Root";
import { createAction } from "r1-io";

export const setDeviceName = createAction<BotContext>(
  SET_DEVICE_NAME.SET,
  async ({ send, text }, { user }) => {
    if (user.isSettingDeviceName) {
      const device = await Device.findOne({
        where: { ip: user.isSettingDeviceName },
      });

      if (!device) {
        throw new Error("Device does not exist");
      }

      device.name = text ?? "Unknown";

      user.isSettingDeviceName = "";

      await user.save();
      await device.save();

      send("Device name successfully changed");
    }
  }
);
