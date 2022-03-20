'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ArrayIsArray = GetIntrinsicOrThrow('Array.isArray');

module.exports = ArrayIsArray;
