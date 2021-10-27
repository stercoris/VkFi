import { IDevice } from "local-devices";

type DeviceStatus = "disconnected" | "connected";

export type DeviceWithStatus = {
  device: IDevice;
  status: DeviceStatus;
};

export const getDeviceDiff = (
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
        status: "disconnected",
      });
    } else {
      deviceSatuses.push({
        device: currentD.find((i) => i.ip === newIp)!,
        status: "connected",
      });
    }
  }

  return deviceSatuses;
};
