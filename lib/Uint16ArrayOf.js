'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Uint16Array = require('./Uint16Array');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint16ArrayOf = FunctionBind(TypedArrayOf, Uint16Array);

module.exports = Uint16ArrayOf;
