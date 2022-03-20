'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Uint8ClampedArray = require('./Uint8ClampedArray');

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Uint8ClampedArrayFrom = FunctionBind(TypedArrayFrom, Uint8ClampedArray);

module.exports = Uint8ClampedArrayFrom;
