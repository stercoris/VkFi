import { getDeviceList } from "bot/wifiParser/wifiParser";
import { Config } from "config/Config";
import { randomInt } from "crypto";
import { IDevice } from "local-devices";
import { VK } from "vk-io";

type DeviceStatus = "disconnected" | "connected";

type DeviceWithStatus = {
  device: IDevice;
  statis: DeviceStatus;
};

let prevDevices: IDevice[] = [];

export const subscribeToChangesInNetwork = async (vk: VK) => {
  const sendMessage = (message: string) =>
    vk.api.messages.send({
      user_id: Config.MASTER_ID,
      message: message,
      random_id: randomInt(281474976710655),
    });

  sendMessage("Im Ready");

  const getDiff = (
    oldD: IDevice[],
    currentD: IDevice[]
  ): DeviceWithStatus[] => {
    const getIps = (devices: IDevice[]) => devices.map((d) => d.ip);

    const oldIps = getIps(oldD);
    const currentIps = getIps(currentD);

    const newIps: string[] = oldIps
      .filter((x) => !currentIps.includes(x))
      .concat(currentIps.filter((x) => !oldIps.includes(x)));

    const deviceSatuses: DeviceWithStatus[] = [];
    for (const newIp of newIps) {
      if (getIps(oldD).includes(newIp)) {
        deviceSatuses.push({
          device: oldD.find((i) => i.ip === newIp)!,
          statis: "disconnected",
        });
      } else {
        deviceSatuses.push({
          device: currentD.find((i) => i.ip === newIp)!,
          statis: "connected",
        });
      }
    }

    return deviceSatuses;
  };

  prevDevices = await getDeviceList();

  setInterval(async () => {
    const devices = await getDeviceList();

    const diff = getDiff(prevDevices, devices);

    if (diff.length > 0) {
      sendMessage(
        diff.reduce(
          (prev, d) =>
            prev +
            `DEVICE: ${d.device.name} WITH IP: ${d.device.ip} ${d.statis} \n`,
          ""
        )
      );
    }
    prevDevices = devices;
  }, 10000);
};
