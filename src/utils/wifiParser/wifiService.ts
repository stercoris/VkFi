import { delay } from "@Utils/delay";
import { getDeviceList } from "@Utils/wifiParser";
import {
  DeviceWithStatus,
  getDeviceDiff,
} from "@Utils/wifiParser/helpers/getDeviceDifference";
import { IDevice } from "local-devices";

type DeviceCallback = (devices: DeviceWithStatus[]) => void;

export class WiFiService {
  /**
   * Current devices pull
   */
  private static devices: IDevice[];

  /**
   * Rate of polling
   */
  private static RATE: number = 5000;

  /**
   * Is polling right now
   */
  private static isPolling: boolean = false;

  /**
   * Array of callback for
   */
  private static callbacks: DeviceCallback[] = [];

  public static get Devices() {
    return WiFiService.devices;
  }

  public static setPollingRate(rate: number): void {
    WiFiService.RATE = rate;
  }

  private constructor(initialDevices: IDevice[]) {
    WiFiService.devices = initialDevices ?? [];
    void WiFiService.backgroundTasks();
  }

  public static async init(): Promise<void> {
    new WiFiService(await getDeviceList());
  }

  public static startPolling(): void {
    WiFiService.isPolling = true;
  }
  public static stopPolling(): void {
    WiFiService.isPolling = false;
  }
  private static async findNewDevices(): Promise<void> {
    const newDevices = await getDeviceList();
    const deviceDiff = getDeviceDiff(WiFiService.devices, newDevices);

    if (deviceDiff.length) {
      WiFiService.callbacks.forEach((c) => c(deviceDiff));
    }
    WiFiService.devices = newDevices;
  }

  public static onNewDevicesFinded(callback: DeviceCallback) {
    WiFiService.callbacks.push(callback);
  }

  private static async backgroundTasks(): Promise<void> {
    const tasks = [WiFiService.findNewDevices];
    const executeAllTasks = (t: typeof tasks) => t.map((t) => t());
    while (true) {
      await delay(WiFiService.RATE);
      if (WiFiService.isPolling) {
        await Promise.all(executeAllTasks(tasks));
      }
    }
  }
}
