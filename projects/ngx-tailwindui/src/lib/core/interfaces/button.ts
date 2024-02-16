import { Style, Variant } from "../../core/types/common";
import { Radius } from "../../core/types/borders/border-radius";
import { FontSize } from "../../core/types/typography/font-size";
import { Shadow } from "../../core/types/effects/box-shadow";
import { BgColor } from "../../core/types/backgrounds/background-color";
import { TextColor } from "../../core/types/typography/text-color";
import { FontWeight } from "../../core/types/typography/font-weight";
import { BorderColor } from "../../core/types/borders/border-color";

export interface Button {
    radius: Radius,
    shadow: Shadow,
    bgColor: BgColor,
    variant: Variant,
    fontSize: FontSize,
    extraStyle?: Style
    textColor: TextColor,
    fontWeight: FontWeight,
    borderColor: BorderColor,
}