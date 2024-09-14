import { tryNumber, tryInt, tryBoolean, tryString, tryObject } from "./index";

// Test functions
console.log("Testing tryNumber:");
console.log(tryNumber(42)); // Should output 42
console.log(tryNumber("3.14")); // Should output 3.14
console.log(tryNumber("not a number", 0)); // Should output 0
console.log(tryNumber("not a number")); // Should output undefined (default fallback)

console.log("\nTesting tryInt:");
console.log(tryInt(42.7)); // Should output 42
console.log(tryInt("123")); // Should output 123
console.log(tryInt("not an int", -1)); // Should output -1
console.log(tryInt("not an int")); // Should output undefined (default fallback)

console.log("\nTesting tryBoolean:");
console.log(tryBoolean(true)); // Should output true
console.log(tryBoolean("true")); // Should output true
console.log(tryBoolean("false")); // Should output false
console.log(tryBoolean("not a boolean", false)); // Should output false
console.log(tryBoolean("not a boolean")); // Should output undefined (default fallback)

console.log("\nTesting tryString:");
console.log(tryString("hello")); // Should output "hello"
console.log(tryString({ key: "value" })); // Should output '{"key":"value"}'
console.log(tryString(Symbol("test"), "fallback")); // Should output "fallback"
console.log(tryString(Symbol("test"))); // Should output undefined (default fallback)

console.log("\nTesting tryObject:");
console.log(tryObject({ key: "value" })); // Should output { key: "value" }
console.log(tryObject('{"key": "value"}')); // Should output { key: "value" }
console.log(tryObject("not an object", { default: true })); // Should output { default: true }
console.log(tryObject("not an object")); // Should output undefined (default fallback)
