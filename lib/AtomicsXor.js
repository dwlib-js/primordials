'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const AtomicsXor = GetIntrinsicOrThrow('Atomics.xor');

module.exports = AtomicsXor;
