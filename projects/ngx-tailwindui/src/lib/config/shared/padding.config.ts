import { PaddingLeft, PaddingTop, PaddingRight, PaddingBottom, PaddingX, PaddingY } from "../../common/types/spacing/padding";

export interface PaddingConfig {
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