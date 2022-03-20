'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const AtomicsAdd = GetIntrinsicOrThrow('Atomics.add');

module.exports = AtomicsAdd;
