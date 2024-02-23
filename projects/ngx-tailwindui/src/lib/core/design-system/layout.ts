import { Placement } from "./layout/placement";
import { AspectRatio } from "./layout/aspect-ratio";
import { Columns } from "./layout/columns";
import { Container } from "./layout/container";
import { Display } from "./layout/display";
import { Float } from "./layout/float";
import { ObjectFit } from "./layout/object-fit";
import { ObjectPosition } from "./layout/object-position";
import { Position } from "./layout/position";
import { Visibility } from "./layout/visibility";
import { ZIndex } from "./layout/z-index";

export const Layout = {
    'aspect-ratio': AspectRatio,
    columns: Columns,
    container: Container,
    display: Display,
    float: Float,
    'object-fit': ObjectFit,
    'object-position': ObjectPosition,
    'placement': Placement,
    'position': Position,
    'visibility': Visibility,
    'z-index': ZIndex,
} as const