export function tryNumber(value: any, fallback: any = undefined) {
  if (typeof value === "number") {
    return value;
  }
  if (typeof value === "string") {
    return parseFloat(value);
  }
  return fallback;
}

export function tryInt(value: any, fallback: any = undefined) {
  if (typeof value === "number") {
    return Math.floor(value);
  }
  if (typeof value === "string") {
    return parseInt(value);
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
