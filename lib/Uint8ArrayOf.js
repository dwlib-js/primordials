'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Uint8Array = require('./Uint8Array');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint8ArrayOf = FunctionBind(TypedArrayOf, Uint8Array);

module.exports = Uint8ArrayOf;
