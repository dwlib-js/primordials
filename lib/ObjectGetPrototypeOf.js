'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ObjectGetPrototypeOf = GetIntrinsicOrThrow('Object.getPrototypeOf');

module.exports = ObjectGetPrototypeOf;
