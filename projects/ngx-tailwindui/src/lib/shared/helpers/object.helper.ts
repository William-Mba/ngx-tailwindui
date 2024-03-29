/**Convert an object to a string assignable to a className*/
export const ToClassName = (obj: Record<string, any>): string => {
    return Object.values(obj).map(value => {
        if (typeof value === "undefined") {
            return;
        }
        if (typeof value === "object") {
            value = ToClassName(value);
        }
        return value

    }).join(' ');
}

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export const isObject = (item: any): boolean => {
    return (item && typeof item === "object" && !Array.isArray(item));
}

/**
 * Merge configurations options of type T
 * @param target
 * @param ...sources
 */
export const mergeDeep = <T extends Record<string, any>>(target: T, ...sources: T[]): T => {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources);
}