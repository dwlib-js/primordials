'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const NumberIsFinite = GetIntrinsicOrThrow('Number.isFinite');

module.exports = NumberIsFinite;
