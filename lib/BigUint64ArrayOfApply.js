'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const BigUint64Array = require('./BigUint64Array');
const FunctionApplyBind = require('./FunctionApplyBind');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const BigUint64ArrayOfApply = FunctionApplyBind(TypedArrayOf, BigUint64Array);

module.exports = BigUint64ArrayOfApply;
