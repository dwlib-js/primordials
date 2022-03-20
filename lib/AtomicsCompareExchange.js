'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const AtomicsCompareExchange = GetIntrinsicOrThrow('Atomics.compareExchange');

module.exports = AtomicsCompareExchange;
