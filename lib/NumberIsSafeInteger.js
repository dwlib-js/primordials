'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const NumberIsSafeInteger = GetIntrinsicOrThrow('Number.isSafeInteger');

module.exports = NumberIsSafeInteger;
