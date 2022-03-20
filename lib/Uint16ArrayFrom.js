'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Uint16Array = require('./Uint16Array');

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Uint16ArrayFrom = FunctionBind(TypedArrayFrom, Uint16Array);

module.exports = Uint16ArrayFrom;
