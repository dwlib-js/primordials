'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Promise = require('./Promise');

const $PromiseAny = GetIntrinsicOrThrow('Promise.any');

const PromiseAny = FunctionBind($PromiseAny, Promise);

module.exports = PromiseAny;
