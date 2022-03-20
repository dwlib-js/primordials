'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');
const Int8Array = require('./Int8Array');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Int8ArrayOfApply = FunctionApplyBind(TypedArrayOf, Int8Array);

module.exports = Int8ArrayOfApply;
