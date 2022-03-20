'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Int32Array = require('./Int32Array');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Int32ArrayOf = FunctionBind(TypedArrayOf, Int32Array);

module.exports = Int32ArrayOf;
