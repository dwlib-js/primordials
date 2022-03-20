'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ObjectGetOwnPropertyNames = GetIntrinsicOrThrow('Object.getOwnPropertyNames');

module.exports = ObjectGetOwnPropertyNames;
