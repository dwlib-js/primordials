'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionApplyBind = require('./FunctionApplyBind');

const StringPrototypeConcat = GetIntrinsicOrThrow('String.prototype.concat');

const StringConcatApply = FunctionApplyBind(StringPrototypeConcat);

module.exports = StringConcatApply;
