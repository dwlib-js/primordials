'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const SymbolKeyFor = GetIntrinsicOrThrow('Symbol.keyFor');

module.exports = SymbolKeyFor;
