export function tryNumber(value: any, fallback: any = undefined) {
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

export function tryInt(value: any, fallback: any = undefined) {
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

export function tryBoolean(value: any, fallback: any = undefined) {
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

export function tryString(value: any, fallback: any = undefined) {
  if (typeof value === "string") {
    return value;
  }
  try {
    return JSON.stringify(value);
  } catch (e) {
    return fallback;
  }
}

export function tryObject(value: any, fallback: any = undefined) {
  if (typeof value === "object") {
    return value;
  }
  try {
    return JSON.parse(value);
  } catch (e) {
    return fallback;
  }
}

export function tryArray(value: any, fallback: any = undefined) {
  if (Array.isArray(value)) {
    return value;
  }
  try {
    let ret = JSON.parse(value);
    if (Array.isArray(ret)) {
      return ret;
    }
    return fallback;
  } catch (e) {
    return fallback;
  }
}

export function tryDate(value: any, fallback: any = undefined) {
  if (value instanceof Date) {
    return value;
  }

  const timestamp = Date.parse(value);
  if (isNaN(timestamp) === false) {
    return new Date(timestamp);
  }

  return fallback;
}

export function tryAny(value: any): any {
  if (value === "undefined") {
    return undefined;
  }

  if (value === "null") {
    return null;
  }

  let result: any;
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
