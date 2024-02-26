import { DesignSystem } from "../../design-system/design-system";
import { From } from "../generics";

export type Column = From<typeof DesignSystem.layout['columns']>