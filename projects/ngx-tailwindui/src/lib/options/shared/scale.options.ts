import { PaddingSize } from "../../shared/types/spacing/padding";
import { FontSize } from "../../shared/types/typography/font-size";
import { PaddingOptions } from "./padding.options";

export interface ScaleOptions {
    padding: PaddingOptions | PaddingSize,
    textSize: FontSize,
}