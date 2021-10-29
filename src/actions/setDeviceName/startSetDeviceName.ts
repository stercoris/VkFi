import { SET_DEVICE_NAME } from "@Actions/setDeviceName";
import { BotContext } from "@Root";
import { IDevice } from "local-devices";
import { createParametarizedAction } from "r1-io";

export const startSetDeviceName = createParametarizedAction<
  BotContext,
  IDevice
>(SET_DEVICE_NAME.START_SETTING, async (device, { send }, { user }) => {
  user.isSettingDeviceName = device.ip;
  user.save();
  send("Send device name");
});
