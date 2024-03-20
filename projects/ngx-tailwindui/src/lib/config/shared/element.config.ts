import { AlignItem } from "../../common/types/flex-n-grid/align-item";
import { JustifyContent } from "../../common/types/flex-n-grid/justify-content";
import { Display } from "../../common/types/layout/display";
import { FontWeight } from "../../common/types/typography/font-weight";

export interface ElementConfig {
    display?: Display,
    /**Horizontal alignment */
    hAlign?: JustifyContent,
    /**Vertical alignment */
    vAlign?: AlignItem,
    fontWeight?: FontWeight,
}