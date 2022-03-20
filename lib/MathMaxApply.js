'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');
const MathMax = require('./MathMax');

const Math = GetIntrinsicOrThrow('Math');

const MathMaxApply = FunctionApplyBind(MathMax, Math);

module.exports = MathMaxApply;
