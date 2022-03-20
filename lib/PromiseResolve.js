'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Promise = require('./Promise');

const $PromiseResolve = GetIntrinsicOrThrow('Promise.resolve');

const PromiseResolve = FunctionBind($PromiseResolve, Promise);

module.exports = PromiseResolve;
