'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Promise = require('./Promise');

const $PromiseAll = GetIntrinsicOrThrow('Promise.all');

const PromiseAll = FunctionBind($PromiseAll, Promise);

module.exports = PromiseAll;
