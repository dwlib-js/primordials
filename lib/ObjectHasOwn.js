'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ObjectHasOwn = GetIntrinsicOrThrow('Object.hasOwn');

module.exports = ObjectHasOwn;
