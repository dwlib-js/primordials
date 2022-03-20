'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Int8Array = require('./Int8Array');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const Int8ArrayOf = FunctionBind(TypedArrayOf, Int8Array);

module.exports = Int8ArrayOf;
