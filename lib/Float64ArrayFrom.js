'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const Float64Array = require('./Float64Array');
const FunctionBind = require('./FunctionBind');

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Float64ArrayFrom = FunctionBind(TypedArrayFrom, Float64Array);

module.exports = Float64ArrayFrom;
