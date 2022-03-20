'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Promise = require('./Promise');

const $PromiseReject = GetIntrinsicOrThrow('Promise.reject');

const PromiseReject = FunctionBind($PromiseReject, Promise);

module.exports = PromiseReject;
