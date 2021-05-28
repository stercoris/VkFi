import { ButtonColor } from "vk-io";
import { TextButton } from "../textButton";

describe("Text Button", () => {
  const Button = new TextButton(() => {
    return {
      label: "Sas",
      color: ButtonColor.NEGATIVE,
    };
  });

  const PropsButton = new TextButton((props: {label: string}) => ({
    label: props.label,
    color: ButtonColor.NEGATIVE
    
  }))

  it("Should work without parameters", async () => {
    expect(await Button.create()).toMatchSnapshot();
  })

  it("Should work with parameters", async () => {
    expect(await PropsButton.create({ label: "Super sus"})).toMatchSnapshot();
  })

  it("Should generate correct button on 'Action' change", async () => {
    Button.Action = "SAS ACTION";
    expect(await Button.create()).toMatchSnapshot();
  });

  it("Should generate correct button on 'Action' change", async () => {
    Button.Action = "SAS ACTION";
    expect(await Button.create()).toMatchSnapshot();
  });
});
