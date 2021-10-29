import R1IO from "r1-io";
import { BotContext } from "@Root";
import { WiFiService } from "@Utils/wifiParser";
import { NavigationButton } from "@Components/Helpers/NavigationButton";
import { startSetDeviceName } from "@Actions/setDeviceName";
import { Menus } from "@Routes/private";

export const DevicesMenu: R1IO.FC<BotContext> = async ({ context, user }) => {
  const devices = WiFiService.Devices;

  const devicesButtons = devices.map((d) => (
    <row>
      <button onClick={startSetDeviceName(d)}>
        Name: {d.name}, IP: {d.ip}
      </button>
    </row>
  ));

  return (
    <menu>
      {devicesButtons as any}
      <row>
        <NavigationButton menu={Menus.MainMenu}>Назад</NavigationButton>
      </row>
    </menu>
  );
};
