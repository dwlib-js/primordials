'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Uint8Array = require('./Uint8Array');

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Uint8ArrayFrom = FunctionBind(TypedArrayFrom, Uint8Array);

module.exports = Uint8ArrayFrom;
