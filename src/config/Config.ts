require("dotenv").config();

export class Config {
  static TOKEN: string = process.env.TOKEN as string;
  static GROUP_ID: number = Number(process.env.GROUP_ID);
  static MASTER_ID: number = Number(process.env.MASTER_ID);
}
