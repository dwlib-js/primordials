'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const Float32Array = require('./Float32Array');
const FunctionBind = require('./FunctionBind');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Float32ArrayOf = FunctionBind(TypedArrayOf, Float32Array);

module.exports = Float32ArrayOf;
