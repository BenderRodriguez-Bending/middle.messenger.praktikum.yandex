function isLength(value) {
    return (
        typeof value === "number" &&
        value > -1 &&
        value % 1 === 0 &&
        value <= Number.MAX_SAFE_INTEGER
    );
}

function getTag(value) {
    if (value == null) {
        return value === undefined ? "[object Undefined]" : "[object Null]";
    }
    return toString.call(value);
}

const objectProto = Object.prototype;
function isPrototype(value) {
    const ctor = value && value.constructor;
    const proto = (typeof ctor === "function" && ctor.prototype) || objectProto;

    return value === proto;
}

function isEmpty(value) {
    if (value == null) {
        return true;
    }

    if (
        (typeof value !== "function" && isLength(value.length)) &&
        (Array.isArray(value) ||
            typeof value === "string" ||
            typeof value.splice === "function" || ((typeof value === "object") && getTag(value) === "[object Arguments]"))
    ) {
        return !value.length;
    }

    const tag = getTag(value);
    if (tag === "[object Map]" || tag === "[object Set]") {
        return !value.size;
    }

    if (isPrototype(value)) {
        return !Object.keys(value).length;
    }


    return true;
}