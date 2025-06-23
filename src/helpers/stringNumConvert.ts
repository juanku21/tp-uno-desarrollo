
export function convertStringNumbers <T extends Record<string, any>> (obj: T): T {

    const result: Record<string, any> = {};

    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'string' && !isNaN(Number(value))) {
            result[key] = Number(value)
        } else {
            result[key] = value
        }
    }

    return result as T
}


export function convertStringNumbersExcept<T extends Record<string, any>>(obj: T): T {
    const result: Record<string, any> = {};

    for (const [key, value] of Object.entries(obj)) {
        if (
            (key !== 'nombre') && (key !== 'ano') &&
            typeof value === 'string' &&
            !isNaN(Number(value))
        ) {
            result[key] = Number(value);
        } else {
            result[key] = value;
        }
    }

    return result as T;
}




