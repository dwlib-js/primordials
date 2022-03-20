'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Int16Array = require('./Int16Array');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Int16ArrayOf = FunctionBind(TypedArrayOf, Int16Array);

module.exports = Int16ArrayOf;
