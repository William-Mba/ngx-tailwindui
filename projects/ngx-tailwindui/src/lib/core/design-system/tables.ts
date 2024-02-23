import { BorderCollapse } from "./tables/border-collapse";
import { BorderSpacing } from "./tables/border-spacing";
import { CaptionSide } from "./tables/caption-side";
import { TableLayout } from "./tables/table-layout";

export const Tables = {
    'border-collapse': BorderCollapse,
    'border-spacing': BorderSpacing,
    'table-layout': TableLayout,
    'caption-side': CaptionSide
} as const