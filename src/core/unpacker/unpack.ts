import { R1Node } from "core/factory/factory";
import { deleteFunctionalComponents } from "core/unpacker/deleteFunctionalComponents";
import { deepResolveContent } from "core/unpacker/getDeepResolved";

export const unpackContent = async (menu: R1Node): Promise<R1Node> =>
  deleteFunctionalComponents(await deepResolveContent(menu));
