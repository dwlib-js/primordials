'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const BigUint64Array = require('./BigUint64Array');
const FunctionBind = require('./FunctionBind');

const TypedArrayFrom = GetIntrinsicOrThrow('TypedArray.from');

const BigUint64ArrayFrom = FunctionBind(TypedArrayFrom, BigUint64Array);

module.exports = BigUint64ArrayFrom;
