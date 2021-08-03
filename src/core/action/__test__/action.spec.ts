import { Action } from "../action";
import { TextButton } from "../../buttons/textButton";
import { ButtonColor } from "vk-io";

describe("Action must", () => {
  it("have constructor with predicate", () => {
    expect(
      () =>
        new Action({
          action: async (context) => console.log(context.text),
          name: "log text",
        })
    ).not.toThrow();
    expect(
      () =>
        new Action({
          action: async (_, navigation) => navigation.goto("MainMenu"),
          name: "goto main menu",
        })
    ).not.toThrow();
  });

  it("have some button attachment funtion", () => {
    const action1 = new Action({
      action: async () => console.log("sas"),
      name: "logsas",
    });
    const action2 = new Action({
      action: async () => console.log("sas"),
      name: "logsas1",
    });
    expect(action1).toHaveProperty("attachButton");
    const button = new TextButton({
      label: "TextButton",
      color: ButtonColor.POSITIVE,
    });
    const connectedButton1 = action1.attachButton(button);
    const connectedButton2 = action2.attachButton(button);
    expect(connectedButton1.Action).toBe(action1.Name);
    expect(connectedButton2.Action).toBe(action2.Name);
  });
});
