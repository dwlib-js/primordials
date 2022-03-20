'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const BigInt64Array = require('./BigInt64Array');
const FunctionBind = require('./FunctionBind');

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const BigInt64ArrayFrom = FunctionBind(TypedArrayFrom, BigInt64Array);

module.exports = BigInt64ArrayFrom;
