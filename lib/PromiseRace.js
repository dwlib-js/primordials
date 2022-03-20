'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('./FunctionBind');
const Promise = require('./Promise');

const $PromiseRace = GetIntrinsicOrThrow('Promise.race');

const PromiseRace = FunctionBind($PromiseRace, Promise);

module.exports = PromiseRace;
