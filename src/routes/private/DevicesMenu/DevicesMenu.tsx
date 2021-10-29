import R1IO from "r1-io";
import { BotContext } from "@Root";
import { WiFiService } from "@Utils/wifiParser";
import { NavigationButton } from "@Components/Helpers/NavigationButton";
import { startSetDeviceName } from "@Actions/setDeviceName";
import { Menus } from "@Routes/private";
import { ButtonColor } from "vk-io";
import { reloadMenuAction } from "@Actions/navigation";
import { wifiServiceCallbacksSet } from "@Actions/wifiService";

export const DevicesMenu: R1IO.FC<BotContext> = async () => {
  const devices = await WiFiService.Devices;

  const devicesButtons = devices.map((d) => (
    <row>
      <button
        onClick={startSetDeviceName(d)}
        color={d.connected ? ButtonColor.POSITIVE : ButtonColor.NEGATIVE}
      >
        Name: {d.name}, IP: {d.ip}
      </button>
    </row>
  ));

  return (
    <menu>
      {devicesButtons as any}
      <row>
        <button onClick={reloadMenuAction()}>Refresh</button>
        {WiFiService.isCallbacksRunning ? (
          <button
            onClick={wifiServiceCallbacksSet({ enabled: false })}
            color={ButtonColor.NEGATIVE}
          >
            Disable Notifications
          </button>
        ) : (
          <button
            onClick={wifiServiceCallbacksSet({ enabled: true })}
            color={ButtonColor.PRIMARY}
          >
            Enable Notifications
          </button>
        )}
      </row>
      <row>
        <NavigationButton menu={Menus.MainMenu}>Назад</NavigationButton>
      </row>
    </menu>
  );
};
