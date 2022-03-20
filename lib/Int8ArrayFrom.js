'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Int8Array = require('./Int8Array');

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const Int8ArrayFrom = FunctionBind(TypedArrayFrom, Int8Array);

module.exports = Int8ArrayFrom;
