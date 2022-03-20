'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Int16Array = require('./Int16Array');

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Int16ArrayFrom = FunctionBind(TypedArrayFrom, Int16Array);

module.exports = Int16ArrayFrom;
