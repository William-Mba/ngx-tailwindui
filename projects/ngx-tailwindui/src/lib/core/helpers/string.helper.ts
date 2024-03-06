/**Convert an object to a string assignable to a className*/
export const ToClassName = (obj: Record<string, any>): string => {
    return Object.values(obj).map(value => {
        if (typeof value === "object") {
            value = ToClassName(value);
        }
        return value

    }).join(' ');
}