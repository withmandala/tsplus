/**
 * CJS Interop - Bridge module.default exports to CommonJS
 * Prevent user from using require().default to access default function/class
 * of the ES Module. This interop module includes type-checking of default
 * object so non-function default export will treated as direct import
 * Copyright (c) 2016 Fadhli Dzil Ikram
 */

const main = require('../dist')
// Check if default object exists or not
if (main.default === undefined) {
  // There is no default exports, fall back to export as-is
  module.exports = main
} else {
  // Check if default object is object
  if (typeof main.default === 'function') {
    // Copy all module property to default
    var keys = Object.getOwnPropertyNames(main)
    for (var key of keys) {
      Object.defineProperty(main.default, key,
        Object.getOwnPropertyDescriptor(main, key)
      )
    }
  }
  // Default object exists, export the default object only
  module.exports = main.default
}
