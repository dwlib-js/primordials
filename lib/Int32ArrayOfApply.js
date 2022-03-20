'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');
const Int32Array = require('./Int32Array');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Int32ArrayOfApply = FunctionApplyBind(TypedArrayOf, Int32Array);

module.exports = Int32ArrayOfApply;
