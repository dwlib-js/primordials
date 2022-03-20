'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');
const Int16Array = require('./Int16Array');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Int16ArrayOfApply = FunctionApplyBind(TypedArrayOf, Int16Array);

module.exports = Int16ArrayOfApply;
