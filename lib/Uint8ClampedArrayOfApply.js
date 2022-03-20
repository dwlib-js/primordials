'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');
const Uint8ClampedArray = require('./Uint8ClampedArray');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint8ClampedArrayOfApply = FunctionApplyBind(TypedArrayOf, Uint8ClampedArray);

module.exports = Uint8ClampedArrayOfApply;
