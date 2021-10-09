import { OutputButton } from "core/factory/elements/button/parser";
import { OutputFunctional } from "core/factory/elements/functional/parser";
import {
  OutputMenu,
  OutputMenuResolved,
} from "core/factory/elements/menu/parser";
import { OutputRow, OutputRowResolved } from "core/factory/elements/row/parser";

const getFunctionalContent = async (
  element: OutputFunctional
): Promise<(OutputRow | OutputButton | OutputFunctional)[]> => {
  const content =
    (await element.content) instanceof Array
      ? await element.content
      : [await element.content];

  return content as (OutputRow | OutputButton | OutputFunctional)[];
};

const unpackFunctional = async (
  element: OutputFunctional
): Promise<(OutputRow | OutputButton | OutputFunctional)[]> => {
  const functionalContent = await getFunctionalContent(element);
  console.log("FUNCTIONAL CONTENT", functionalContent);
  // if (functionalContent.type === "functional") {
  //   return unpackFunctional(functionalContent);
  // }

  return functionalContent;
};
export async function unpackContent(e: OutputMenu): Promise<OutputMenuResolved>;
export async function unpackContent(e: OutputRow): Promise<OutputRowResolved>;
export async function unpackContent(e: OutputButton): Promise<OutputButton>;
export async function unpackContent(
  e: OutputFunctional
): Promise<OutputRowResolved | OutputButton>;

export async function unpackContent(
  element: OutputMenu | OutputRow | OutputButton | OutputFunctional
): Promise<OutputMenuResolved | OutputRowResolved | OutputButton> {
  if (element.type === "button") {
    return { ...element, content: await element.content };
  }

  const content = (
    element.type === "functional"
      ? await unpackFunctional(element)
      : await element.content
  ) as Promise<OutputMenu | OutputRow | OutputButton | OutputFunctional>[];

  const contentResolved = await Promise.all(content);

  const resolvedElement = { ...element, content: contentResolved };

  const sas = resolvedElement as unknown as
    | OutputMenuResolved
    | OutputRowResolved
    | OutputButton;

  const subscontent = [];
  if (sas.type === "button") {
    subscontent.push(sas.content);
  } else {
    for (const element of sas.content) {
      //@ts-ignore
      subscontent.push(await unpackContent(element));
    }
  }

  const sus = subscontent;

  return {
    ...element,
    //@ts-ignore
    content: sus,
  };
}
