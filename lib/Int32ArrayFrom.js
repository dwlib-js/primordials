'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Int32Array = require('./Int32Array');

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Int32ArrayFrom = FunctionBind(TypedArrayFrom, Int32Array);

module.exports = Int32ArrayFrom;
