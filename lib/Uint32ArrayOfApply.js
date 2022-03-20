'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');
const Uint32Array = require('./Uint32Array');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint32ArrayOfApply = FunctionApplyBind(TypedArrayOf, Uint32Array);

module.exports = Uint32ArrayOfApply;
