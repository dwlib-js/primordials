'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const SymbolFor = GetIntrinsicOrThrow('Symbol.for');

module.exports = SymbolFor;
