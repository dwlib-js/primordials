'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');
const Uint8Array = require('./Uint8Array');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint8ArrayOfApply = FunctionApplyBind(TypedArrayOf, Uint8Array);

module.exports = Uint8ArrayOfApply;
