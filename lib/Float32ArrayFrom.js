'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const Float32Array = require('./Float32Array');
const FunctionBind = require('./FunctionBind');

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Float32ArrayFrom = FunctionBind(TypedArrayFrom, Float32Array);

module.exports = Float32ArrayFrom;
