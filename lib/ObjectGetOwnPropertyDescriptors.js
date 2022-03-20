'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ObjectGetOwnPropertyDescriptors = GetIntrinsicOrThrow('Object.getOwnPropertyDescriptors');

module.exports = ObjectGetOwnPropertyDescriptors;
