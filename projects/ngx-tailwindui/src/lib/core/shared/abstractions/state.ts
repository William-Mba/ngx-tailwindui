
export interface IEnabled {
    enable(): void
}
export interface IDisabled {
    disable(): void
}
export interface IHovered {
    hover(): void
}
export interface IFocused {
    focus(): void
}
export interface IClicked {
    click(): void
}

export interface IState extends IEnabled, IDisabled, IHovered, IFocused, IClicked {
    enable(): void,
    disable(): void,
    hover(): void,
    focus(): void,
    click(): void
}

export abstract class State implements IState {

    protected constructor () { }

    abstract enable(): void;

    abstract disable(): void;

    abstract hover(): void;

    abstract focus(): void;

    abstract click(): void;
}