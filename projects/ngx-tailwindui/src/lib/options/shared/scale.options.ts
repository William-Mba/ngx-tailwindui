import { RoundedSize } from "../../shared/types/borders/border-radius";
import { PaddingSize } from "../../shared/types/spacing/padding";
import { FontSize } from "../../shared/types/typography/font-size";
import { PaddingOptions } from "./padding.options";
import { RoundedOptions } from "./rounded.options";

export interface ScaleOptions {
    padding?: PaddingOptions | PaddingSize,
    textSize?: FontSize,
    rounded?: RoundedOptions | RoundedSize
}