'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ObjectFreeze = GetIntrinsicOrThrow('Object.freeze');

module.exports = ObjectFreeze;
