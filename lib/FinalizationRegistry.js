'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const FinalizationRegistry = GetIntrinsicOrThrow('FinalizationRegistry');

module.exports = FinalizationRegistry;
