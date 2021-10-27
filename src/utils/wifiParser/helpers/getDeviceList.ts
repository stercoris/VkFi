import findLocalDevices, { IDevice } from "local-devices";
import colorsJson from "devices.json";

type MyDevices = { [key: string]: string };

const myDevices: MyDevices = colorsJson;

export const getDeviceList = async (): Promise<IDevice[]> => {
  const devices = await findLocalDevices();

  const getDeviceNameFromJSON = (device: IDevice) => ({
    ...device,
    name: myDevices[device.ip] ?? "Unknown",
  });

  const filledNames = devices.map(getDeviceNameFromJSON);

  return filledNames;
};

export const prettifyDeviceNames = (devices: IDevice[]): string => {
  const prettifyDeviceName = (d: IDevice) => `${d.name} - ${d.ip} \n`;
  const prettifyedNames = devices.map(prettifyDeviceName).join("");
  return prettifyedNames;
};
