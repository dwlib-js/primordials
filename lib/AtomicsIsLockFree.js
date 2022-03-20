'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const AtomicsIsLockFree = GetIntrinsicOrThrow('Atomics.isLockFree');

module.exports = AtomicsIsLockFree;
