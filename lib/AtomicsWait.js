'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const AtomicsWait = GetIntrinsicOrThrow('Atomics.wait');

module.exports = AtomicsWait;
