import { Opacity } from "../../constants/effects/opacity";
import { From } from "../generics";

export type Opacity = From<typeof Opacity>

export type OpacityOnDisabled = Extract<Opacity, "opacity-5" | "opacity-10" | "opacity-20" | "opacity-40">