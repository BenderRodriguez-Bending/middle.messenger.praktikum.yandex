export function getContext(obj, context, defaultValue = "") {
    const keys = context.split('.');
    let result = "";

    if (!obj){
        return defaultValue;
    }

    for (let key of keys) {
        result = obj[key];

        if (result === undefined) {
            return defaultValue;
        }
    }

    return result ?? defaultValue;
}