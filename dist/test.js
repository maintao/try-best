"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// Test functions
console.log("Testing tryNumber:");
console.log((0, index_1.tryNumber)(42)); // Should output 42
console.log((0, index_1.tryNumber)("3.14")); // Should output 3.14
console.log((0, index_1.tryNumber)("not a number", 0)); // Should output 0
console.log((0, index_1.tryNumber)("not a number")); // Should output undefined (default fallback)
console.log("\nTesting tryInt:");
console.log((0, index_1.tryInt)(42.7)); // Should output 42
console.log((0, index_1.tryInt)("123")); // Should output 123
console.log((0, index_1.tryInt)("not an int", -1)); // Should output -1
console.log((0, index_1.tryInt)("not an int")); // Should output undefined (default fallback)
console.log("\nTesting tryBoolean:");
console.log((0, index_1.tryBoolean)(true)); // Should output true
console.log((0, index_1.tryBoolean)("true")); // Should output true
console.log((0, index_1.tryBoolean)("false")); // Should output false
console.log((0, index_1.tryBoolean)("not a boolean", false)); // Should output false
console.log((0, index_1.tryBoolean)("not a boolean")); // Should output undefined (default fallback)
console.log("\nTesting tryString:");
console.log((0, index_1.tryString)("hello")); // Should output "hello"
console.log((0, index_1.tryString)({ key: "value" })); // Should output '{"key":"value"}'
console.log((0, index_1.tryString)(Symbol("test"), "fallback")); // Should output "fallback"
console.log((0, index_1.tryString)(Symbol("test"))); // Should output undefined (default fallback)
console.log("\nTesting tryObject:");
console.log((0, index_1.tryObject)({ key: "value" })); // Should output { key: "value" }
console.log((0, index_1.tryObject)('{"key": "value"}')); // Should output { key: "value" }
console.log((0, index_1.tryObject)("not an object", { default: true })); // Should output { default: true }
console.log((0, index_1.tryObject)("not an object")); // Should output undefined (default fallback)
//# sourceMappingURL=test.js.map