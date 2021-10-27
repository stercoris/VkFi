import findLocalDevices, { IDevice } from "local-devices";
import colorsJson from "./devices.json";

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
export const getDeviceListPrettifed = async (
  devicesOrPromise: Promise<IDevice[]> | IDevice[] = getDeviceList()
): Promise<string> => {
  const devices = await devicesOrPromise;
  const parsedDevices = devices.reduce(
    (prev, d) => prev + `${d.name} - ${d.ip} \n`,
    ""
  );
  return parsedDevices;
};
