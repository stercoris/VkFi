import findLocalDevices, { IDevice } from "local-devices";
import colorsJson from "devices.json";

type MyDevices = { [key: string]: string };

const myDevices: MyDevices = colorsJson;

export const getDeviceList = async (): Promise<IDevice[]> => {
  const devices = await findLocalDevices();

  for (const device of devices) {
    if (Object.keys(myDevices).includes(device.ip)) {
      device.name = myDevices[device.ip];
    }
  }

  return devices;
};

//TODO REDO
export const prettifyDeviceNames = async (
  devices: IDevice[]
): Promise<string> => {
  const prettifyDeviceName = (d: IDevice) => `${d.name} - ${d.ip} \n`;
  const prettifyedNames = devices.map(prettifyDeviceName).join("");
  return prettifyedNames;
};
