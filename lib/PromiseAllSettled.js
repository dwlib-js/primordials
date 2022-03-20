'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Promise = require('./Promise');

const $PromiseAllSettled = GetIntrinsicOrThrow('Promise.allSettled');

const PromiseAllSettled = FunctionBind($PromiseAllSettled, Promise);

module.exports = PromiseAllSettled;
