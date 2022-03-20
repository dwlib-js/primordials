'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ObjectSetPrototypeOf = GetIntrinsicOrThrow('Object.setPrototypeOf');

module.exports = ObjectSetPrototypeOf;
