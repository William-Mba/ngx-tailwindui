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
export interface IActived {
    active(): void
}
export interface IPressed {
    click(): void
}
export interface IDragged {
    drag(): void
}