'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const Float64Array = require('./Float64Array');
const FunctionApplyBind = require('./FunctionApplyBind');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Float64ArrayOfApply = FunctionApplyBind(TypedArrayOf, Float64Array);

module.exports = Float64ArrayOfApply;
