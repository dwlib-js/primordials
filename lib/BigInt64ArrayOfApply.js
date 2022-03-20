'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const BigInt64Array = require('./BigInt64Array');
const FunctionApplyBind = require('./FunctionApplyBind');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const BigInt64ArrayOfApply = FunctionApplyBind(TypedArrayOf, BigInt64Array);

module.exports = BigInt64ArrayOfApply;
