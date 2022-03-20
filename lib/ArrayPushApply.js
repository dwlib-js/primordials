'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');

const ArrayPrototypePush = GetIntrinsicOrThrow('Array.prototype.push');

const ArrayPushApply = FunctionApplyBind(ArrayPrototypePush);

module.exports = ArrayPushApply;
