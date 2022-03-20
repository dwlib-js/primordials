'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const AtomicsNotify = GetIntrinsicOrThrow('Atomics.notify');

module.exports = AtomicsNotify;
