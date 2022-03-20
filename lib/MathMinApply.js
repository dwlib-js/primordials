'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');
const MathMin = require('./MathMin');

const Math = GetIntrinsicOrThrow('Math');

const MathMinApply = FunctionApplyBind(MathMin, Math);

module.exports = MathMinApply;
