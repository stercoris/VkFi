import configJson from "@ConfigJSON";

type ConfigType = {
  group_id: number;
  master_id: number;
  api_token: string;
};

const CONFIG = configJson as unknown as ConfigType;

export class Config {
  static TOKEN: string = CONFIG.api_token;
  static GROUP_ID: number = Number(CONFIG.group_id);
  static MASTER_ID: number = Number(CONFIG.master_id);
}
