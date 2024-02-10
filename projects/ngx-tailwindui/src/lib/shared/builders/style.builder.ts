import { Background } from "../../core/enums/background.enum";
import { Border, BorderRadius } from "../../core/enums/border.enum";
import { Display } from "../../core/enums/display.enum";
import { TextColor } from "../../core/enums/text-color.enum";
import { ArrayO } from "../helpers/array.helper";
import { OnHover } from "../../core/functions/state-modifiers";

export class StyleBuilder {
    private _style: Style = [];

    private buttonDefault: Style = [
        'px-6',
        'py-3',
        TextColor.white,
        Background.indigo_600,
        Display.inline_block,
        BorderRadius.rounded,
        Border.border,
        Border.transparent
    ];

    get style() {
        return this._style;
    }

    public Button(style?: Style): StyleBuilder{        
        const customStyle = style ?? []
        this._style = ArrayO.merge(customStyle, this.buttonDefault);
        return this
    }

    public With(style: Style): StyleBuilder{
        this._style = ArrayO.merge(style, this._style)
        return this
    }
}

export type Style = string [];