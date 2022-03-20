'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const Float32Array = require('./Float32Array');
const FunctionApplyBind = require('./FunctionApplyBind');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Float32ArrayOfApply = FunctionApplyBind(TypedArrayOf, Float32Array);

module.exports = Float32ArrayOfApply;
