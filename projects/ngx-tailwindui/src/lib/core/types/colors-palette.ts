import { DesignSystem } from "../design-system/design-system";
import { From } from "./generics";

export type Color = From<typeof DesignSystem.colors>