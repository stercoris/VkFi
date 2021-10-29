import R1IO from "r1-io";
import { BotContext, Menus } from "@Root";
import { WiFiService } from "@Utils/wifiParser";
import { NavigationButton } from "@Components/Helpers/NavigationButton";

export const DevicesMenu: R1IO.FC<BotContext> = async () => {
  const devices = WiFiService.Devices;

  const devicesButtons = devices.map((d) => (
    <row>
      <button>
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
