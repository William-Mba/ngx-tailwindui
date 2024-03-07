import { AlignItem } from "../../shared/types/flex-n-grid/align-item";
import { JustifyContent } from "../../shared/types/flex-n-grid/justify-content";
import { Display } from "../../shared/types/layout/display";
import { FontWeight } from "../../shared/types/typography/font-weight";

export interface ElementOptions {
    display?: Display,
    /**Horizontal alignment */
    hAlign?: JustifyContent,
    /**Vertical alignment */
    vAlign?: AlignItem,
    fontWeight?: FontWeight,
}