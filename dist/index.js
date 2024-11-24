"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryNumber = tryNumber;
exports.tryInt = tryInt;
exports.tryBoolean = tryBoolean;
exports.tryString = tryString;
exports.tryObject = tryObject;
exports.tryArray = tryArray;
exports.tryDate = tryDate;
exports.tryAny = tryAny;
function tryNumber(value, fallback = undefined) {
    if (typeof value === "number") {
        return value;
    }
    if (typeof value === "string") {
        const val = parseFloat(value);
        if (!isNaN(val)) {
            return val;
        }
    }
    return fallback;
}
function tryInt(value, fallback = undefined) {
    if (typeof value === "number") {
        return Math.floor(value);
    }
    if (typeof value === "string") {
        const val = parseInt(value);
        if (!isNaN(val)) {
            return val;
        }
    }
    return fallback;
}
function tryBoolean(value, fallback = undefined) {
    if (typeof value === "boolean") {
        return value;
    }
    if (typeof value === "string") {
        if (value.toLowerCase() === "true") {
            return true;
        }
        if (value.toLowerCase() === "false") {
            return false;
        }
    }
    return fallback;
}
function tryString(value, fallback = undefined) {
    if (typeof value === "string") {
        return value;
    }
    try {
        return JSON.stringify(value);
    }
    catch (e) {
        return fallback;
    }
}
function tryObject(value, fallback = undefined) {
    if (typeof value === "object") {
        return value;
    }
    try {
        return JSON.parse(value);
    }
    catch (e) {
        return fallback;
    }
}
function tryArray(value, fallback = undefined) {
    if (Array.isArray(value)) {
        return value;
    }
    try {
        let ret = JSON.parse(value);
        if (Array.isArray(ret)) {
            return ret;
        }
        return fallback;
    }
    catch (e) {
        return fallback;
    }
}
function tryDate(value, fallback = undefined) {
    if (value instanceof Date) {
        return value;
    }
    const timestamp = Date.parse(value);
    if (isNaN(timestamp) === false) {
        return new Date(timestamp);
    }
    return fallback;
}
function tryAny(value) {
    if (value === "undefined") {
        return undefined;
    }
    if (value === "null") {
        return null;
    }
    let result;
    // number
    result = tryNumber(value);
    if (result !== undefined) {
        return result;
    }
    // bool
    result = tryBoolean(value);
    if (result !== undefined) {
        return result;
    }
    // json
    if (/(^\{.*\}$)|(^\[.*\]$)/.test(value)) {
        result = tryObject(value);
        if (result !== undefined) {
            return result;
        }
    }
    // string
    return tryString(value);
}
//# sourceMappingURL=index.js.map