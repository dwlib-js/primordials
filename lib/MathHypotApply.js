'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');
const MathHypot = require('./MathHypot');

const Math = GetIntrinsicOrThrow('Math');

const MathHypotApply = FunctionApplyBind(MathHypot, Math);

module.exports = MathHypotApply;
