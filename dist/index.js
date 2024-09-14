"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryNumber = tryNumber;
exports.tryInt = tryInt;
exports.tryBoolean = tryBoolean;
exports.tryString = tryString;
exports.tryObject = tryObject;
function tryNumber(value, fallback = undefined) {
    if (typeof value === "number") {
        return value;
    }
    if (typeof value === "string") {
        return parseFloat(value);
    }
    return fallback;
}
function tryInt(value, fallback = undefined) {
    if (typeof value === "number") {
        return Math.floor(value);
    }
    if (typeof value === "string") {
        return parseInt(value);
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
//# sourceMappingURL=index.js.map