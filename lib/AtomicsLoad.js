'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const AtomicsLoad = GetIntrinsicOrThrow('Atomics.load');

module.exports = AtomicsLoad;
