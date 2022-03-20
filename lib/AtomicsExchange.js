'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const AtomicsExchange = GetIntrinsicOrThrow('Atomics.exchange');

module.exports = AtomicsExchange;
