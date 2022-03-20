'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');

const FunctionPrototypeApply = GetIntrinsicOrThrow('Function.prototype.apply');
const FunctionPrototypeBind = GetIntrinsicOrThrow('Function.prototype.bind');

const FunctionApplyBind = FunctionBind(FunctionPrototypeBind, FunctionPrototypeApply);

module.exports = FunctionApplyBind;
