'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Uint8ClampedArray = require('./Uint8ClampedArray');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Uint8ClampedArrayOf = FunctionBind(TypedArrayOf, Uint8ClampedArray);

module.exports = Uint8ClampedArrayOf;
