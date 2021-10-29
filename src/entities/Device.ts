import { IDevice } from "local-devices";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Device extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ip: string;

  @Column()
  mac: string;

  @Column({ default: "Unknown" })
  name: string;

  @Column({ default: true })
  connected: boolean;

  public static async createFromIDevice(device: IDevice): Promise<Device> {
    return await Device.create({
      ip: device.ip,
      name: device.name ?? "Unknown",
      mac: device.mac,
    }).save();
  }
}
