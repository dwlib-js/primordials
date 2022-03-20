'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const Float64Array = require('./Float64Array');
const FunctionBind = require('./FunctionBind');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Float64ArrayOf = FunctionBind(TypedArrayOf, Float64Array);

module.exports = Float64ArrayOf;
