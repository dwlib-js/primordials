'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const AtomicsStore = GetIntrinsicOrThrow('Atomics.store');

module.exports = AtomicsStore;
