import { Menus } from "@Routes/private";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

const MINUTE = 1000 * 60;
const HOUR = MINUTE * 60;

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vkId: number;

  @Column({ default: HOUR * 5 })
  mailingInterval: number;

  @Column({ default: MINUTE })
  pullInteval: number;

  @Column({ default: null, nullable: true })
  isSettingDeviceName?: string;

  @Column({ default: Menus.MainMenu })
  selectedMenu: Menus;

  @Column({ default: Menus.MainMenu })
  previousMenu: Menus;
}
