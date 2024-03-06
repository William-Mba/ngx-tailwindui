import { Content } from "./typography/content";
import { FontFamily } from "./typography/font-family";
import { FontSize } from "./typography/font-size";
import { FontStyle } from "./typography/font-style";
import { FontWeight } from "./typography/font-weight";
import { LetterSpacing } from "./typography/letter-spacing";
import { LineClamp } from "./typography/line-clamp";
import { LineHeight } from "./typography/line-height";
import { ListStyleImage } from "./typography/list-style-image";
import { ListStyleType } from "./typography/list-style-type";
import { TextAlign } from "./typography/text-align";
import { TextColor } from "./typography/text-color";
import { TextDecorationColor } from "./typography/text-decoration-color";
import { TextDecorationLine } from "./typography/text-decoration-line";
import { TextDecorationStyle } from "./typography/text-decoration-style";
import { TextOverflow } from "./typography/text-overflow";
import { TextTransform } from "./typography/text-transform";
import { TextWrap } from "./typography/text-wrap";
import { VerticalAlign } from "./typography/vertical-align";
import { WordBreak } from "./typography/word-break";

export const Typography = {
    content: Content,
    'font-family': FontFamily,
    'font-size': FontSize,
    'font-style': FontStyle,
    'font-weight': FontWeight,
    'letter-spacing': LetterSpacing,
    'line-clamp': LineClamp,
    'line-height': LineHeight,
    'list-style-image': ListStyleImage,
    'list-style-type': ListStyleType,
    'text-align': TextAlign,
    'text-color': TextColor,
    'text-decoration-color': TextDecorationColor,
    'text-decoration-line': TextDecorationLine,
    'text-decoration-style': TextDecorationStyle,
    'text-overflow': TextOverflow,
    'text-transform': TextTransform,
    'text-wrap': TextWrap,
    'vertical-align': VerticalAlign,
    'word-break': WordBreak
} as const