'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const NumberIsInteger = GetIntrinsicOrThrow('Number.isInteger');

module.exports = NumberIsInteger;
