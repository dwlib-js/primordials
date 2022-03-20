'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');

const ArrayPrototypeUnshift = GetIntrinsicOrThrow('Array.prototype.unshift');

const ArrayUnshiftApply = FunctionApplyBind(ArrayPrototypeUnshift);

module.exports = ArrayUnshiftApply;
