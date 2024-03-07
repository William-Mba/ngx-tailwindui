import { PaddingLeft, PaddingTop, PaddingRight, PaddingBottom, PaddingX, PaddingY } from "../../shared/types/spacing/padding";

export interface PaddingOptions {
    /**left */
    l?: PaddingLeft,
    /**top */
    t?: PaddingTop,
    /**right */
    r?: PaddingRight,
    /**bottom */
    b?: PaddingBottom,
    /**horizontal */
    x?: PaddingX,
    /**vertical */
    y?: PaddingY
}