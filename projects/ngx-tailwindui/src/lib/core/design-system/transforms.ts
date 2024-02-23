import { TransformOrigin } from "./transforms/transform-origin";
import { Rotate } from "./transforms/rotate";
import { Scale } from "./transforms/scale";
import { Skew } from "./transforms/skew";

export const Transforms = {
    rotate: Rotate,
    scale: Scale,
    skew: Skew,
    'transform-origin': TransformOrigin
} as const