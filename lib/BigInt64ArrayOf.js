'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const BigInt64Array = require('./BigInt64Array');
const FunctionBind = require('./FunctionBind');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const BigInt64ArrayOf = FunctionBind(TypedArrayOf, BigInt64Array);

module.exports = BigInt64ArrayOf;
