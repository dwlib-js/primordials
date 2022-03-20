'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ObjectGetOwnPropertyDescriptor = GetIntrinsicOrThrow('Object.getOwnPropertyDescriptor');

module.exports = ObjectGetOwnPropertyDescriptor;
