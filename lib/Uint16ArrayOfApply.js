'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');
const Uint16Array = require('./Uint16Array');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint16ArrayOfApply = FunctionApplyBind(TypedArrayOf, Uint16Array);

module.exports = Uint16ArrayOfApply;
