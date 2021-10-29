import findLocalDevices, { IDevice } from "local-devices";
import colorsJson from "devices.json";
import { Device } from "@Entities/Device";

type MyDevices = { [key: string]: string };

const myDevices: MyDevices = colorsJson;

const findOrCreateNewDevice = (d: IDevice): Promise<Device> =>
  Device.findOne({ where: { id: d.ip } }).then(
    (dbDevice) =>
      dbDevice ??
      Device.create({ ip: d.ip, mac: d.mac, name: "Unknown" }).save()
  );

export const getDeviceList = async (): Promise<Device[]> => {
  const devices = await findLocalDevices();

  const filledNames = await Promise.all(devices.map(findOrCreateNewDevice));

  return filledNames;
};

export const prettifyDeviceNames = (devices: IDevice[]): string => {
  const prettifyDeviceName = (d: IDevice) => `${d.name} - ${d.ip} \n`;
  const prettifyedNames = devices.map(prettifyDeviceName).join("");
  return prettifyedNames;
};
