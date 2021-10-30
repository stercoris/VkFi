import R1IO from "r1-io";
import { BotContext } from "@Root";
import { WiFiService } from "@Utils/wifiParser";
import { NavigationButton } from "@Components/Helpers/NavigationButton";
import { startSetDeviceName } from "@Actions/setDeviceName";
import { Menus } from "@Routes/private";
import { ButtonColor } from "vk-io";
import { reloadMenuAction } from "@Actions/navigation";
import { wifiServiceCallbacksSet } from "@Actions/wifiService";
import { Device } from "@Entities/Device";

const getDevicesButtons = async (devices: Device[]) =>
  devices.map(async (d) => (
    <row>
      <button
        onClick={startSetDeviceName(d.ip)}
        color={d.connected ? ButtonColor.POSITIVE : ButtonColor.NEGATIVE}
        label={`Имя: ${d.name}, IP: ${d.ip}`}
      />
    </row>
  ));

export const DevicesMenu: R1IO.FC<BotContext> = async ({ user }) => {
  const devices = await WiFiService.Devices;

  return (
    <menu>
      {await getDevicesButtons(devices)}
      <row>
        <button onClick={reloadMenuAction()}>Обновить</button>
        {user.isNotificationsEnabled ? (
          <button
            onClick={wifiServiceCallbacksSet({ enabled: false })}
            color={ButtonColor.NEGATIVE}
          >
            Выключить уведомления
          </button>
        ) : (
          <button
            onClick={wifiServiceCallbacksSet({ enabled: true })}
            color={ButtonColor.PRIMARY}
          >
            Включить уведомления
          </button>
        )}
      </row>
      <row>
        <NavigationButton menu={Menus.MainMenu}>Назад</NavigationButton>
      </row>
    </menu>
  );
};
