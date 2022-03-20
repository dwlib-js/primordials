'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Uint32Array = require('./Uint32Array');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint32ArrayOf = FunctionBind(TypedArrayOf, Uint32Array);

module.exports = Uint32ArrayOf;
