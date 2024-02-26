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
import { Overflow } from "./layout/overflow";
import { BoxSizing } from "./layout/box-sizing";

export const Layout = {
    'aspect-ratio': AspectRatio,
    'box-sizing': BoxSizing,
    columns: Columns,
    container: Container,
    display: Display,
    float: Float,
    'object-fit': ObjectFit,
    'object-position': ObjectPosition,
    'overflow': Overflow,
    'placement': Placement,
    'position': Position,
    'visibility': Visibility,
    'z-index': ZIndex,
} as const