import { ClassName, Variant } from "../../core/types/common";
import { BorderRadius } from "../../core/types/borders/border-radius";
import { FontSize } from "../../core/types/typography/font-size";
import { Shadow } from "../../core/types/effects/box-shadow";
import { BgColor } from "../../core/types/backgrounds/background-color";
import { TextColor } from "../../core/types/typography/text-color";
import { FontWeight } from "../../core/types/typography/font-weight";
import { OutlineColor } from "../types/borders/outline-color";

export interface Button {
    shadow: Shadow,
    bgColor: BgColor,
    variant: Variant,
    className?: ClassName,
    fontSize: FontSize,
    textColor: TextColor,
    fontWeight: FontWeight,
    outlineColor: OutlineColor
    borderRadius: BorderRadius,
}