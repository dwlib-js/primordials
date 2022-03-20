'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Uint32Array = require('./Uint32Array');

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Uint32ArrayFrom = FunctionBind(TypedArrayFrom, Uint32Array);

module.exports = Uint32ArrayFrom;
