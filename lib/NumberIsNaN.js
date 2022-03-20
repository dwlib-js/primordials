'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const NumberIsNaN = GetIntrinsicOrThrow('Number.isNaN');

module.exports = NumberIsNaN;
