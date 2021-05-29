import { ButtonColor } from "vk-io";
import { TextButton } from "../textButton";

describe("Text Button", () => {
  it("should be generated correctrly with non-parameters constructor", async () => {
    const Button = new TextButton(() => ({
      label: "Sas",
      color: ButtonColor.NEGATIVE,
    }));
    expect(await Button.create()).toMatchSnapshot();
  });

  it("should be generated correctrly with parameters constructor", async () => {
    const PropsButton = new TextButton((props: { label: string }) => ({
      label: props.label,
      color: ButtonColor.NEGATIVE,
    }));
    expect(await PropsButton.create({ label: "Super sus" })).toMatchSnapshot();
  });

  it("should be generated correctly with simple non-argument constructor", async () => {
    const SimpleButton = new TextButton({
      label: "Simple Button",
      color: ButtonColor.PRIMARY,
    });
    expect(await SimpleButton.create()).toMatchSnapshot();
  });

  it("should be generated correctly with 'Action' changed", async () => {
    const Button = new TextButton(() => ({
      label: "Sas",
      color: ButtonColor.NEGATIVE,
    }));
    Button.Action = "SAS ACTION";
    expect(await Button.create()).toMatchSnapshot();
  });

});
