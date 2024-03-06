export type From<T> = keyof T

export function IsAcceptableClass<T extends { length: number }>(cl: T): boolean {
    return cl.length >= 3
}