import { RoundedSize } from "../../common/types/borders/border-radius";
import { PaddingSize } from "../../common/types/spacing/padding";
import { FontSize } from "../../common/types/typography/font-size";
import { PaddingConfig } from "./padding.config";
import { RoundedConfig } from "./rounded.config";

export interface ScaleConfig {
    padding?: PaddingConfig | PaddingSize,
    textSize?: FontSize,
    rounded?: RoundedConfig | RoundedSize
}