'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const BigUint64Array = require('./BigUint64Array');
const FunctionBind = require('./FunctionBind');

const TypedArrayOf = GetIntrinsicOrThrow('TypedArray.of');

const BigUint64ArrayOf = FunctionBind(TypedArrayOf, BigUint64Array);

module.exports = BigUint64ArrayOf;
