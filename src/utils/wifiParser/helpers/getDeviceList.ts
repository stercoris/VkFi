import findLocalDevices, { IDevice } from "local-devices";
import { Device } from "@Entities/Device";

const setDevicesConnectionsFalse = (devices: Device[]): Promise<Device>[] =>
  devices.map((d) => {
    d.connected = false;
    return d.save();
  });

const findOrCreateNewDevice = async (d: IDevice): Promise<Device> => {
  await Promise.all(await Device.find().then(setDevicesConnectionsFalse));
  const device = await Device.findOne({ where: { mac: d.mac } }).then(
    (dbDevice) => dbDevice ?? Device.createFromIDevice(d)
  );
  device.connected = true;
  await device.save();
  return device;
};

export const findAndUpdateDevices = async (): Promise<Device[]> => {
  const devices = await findLocalDevices();

  await Promise.all(devices.map(findOrCreateNewDevice));

  return await Device.find();
};
