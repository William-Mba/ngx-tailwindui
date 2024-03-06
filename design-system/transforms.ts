import { TransformOrigin } from "./transforms/transform-origin";
import { Rotate } from "./transforms/rotate";
import { Scale } from "./transforms/scale";
import { Skew } from "./transforms/skew";
import { Translate } from "./transforms/translate";

export const Transforms = {
    rotate: Rotate,
    scale: Scale,
    skew: Skew,
    'transform-origin': TransformOrigin,
    translate: Translate
} as const