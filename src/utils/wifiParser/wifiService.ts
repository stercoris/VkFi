import { delay } from "@Utils/delay";
import { getDeviceList } from "@Utils/wifiParser";
import {
  DeviceWithStatus,
  getDeviceDiff,
} from "@Utils/wifiParser/helpers/getDeviceDifference";
import { IDevice } from "local-devices";

type DeviceCallback = (devices: DeviceWithStatus[]) => void;

export class WiFiService {
  private devices: IDevice[];

  private static RATE: number = 5000;
  public static setPollingRate(rate: number): void {
    WiFiService.RATE = rate;
  }

  private constructor(initialDevices: IDevice[]) {
    this.devices = initialDevices ?? [];
    void this.backgroundTasks();
  }

  public static async init(): Promise<WiFiService> {
    return new WiFiService(await getDeviceList());
  }

  private isPolling: boolean = false;
  public startPolling(): void {
    this.isPolling = true;
  }
  public stopPolling(): void {
    this.isPolling = false;
  }
  private async findNewDevices(): Promise<void> {
    const newDevices = await getDeviceList();
    const deviceDiff = getDeviceDiff(this.devices, newDevices);

    if (deviceDiff.length) {
      this.callbacks.forEach((c) => c(deviceDiff));
    }
    this.devices = newDevices;
  }

  private callbacks: DeviceCallback[] = [];
  public onNewDevicesFinded(callback: DeviceCallback) {
    this.callbacks.push(callback);
  }

  private async backgroundTasks(): Promise<void> {
    const tasks = [this.findNewDevices];
    const executeAllTasks = (t: typeof tasks) => t.map((t) => t.apply(this));
    while (true) {
      await delay(WiFiService.RATE);
      if (this.isPolling) {
        await Promise.all(executeAllTasks(tasks));
      }
    }
  }
}
