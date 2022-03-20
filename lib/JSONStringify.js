'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const JSONStringify = GetIntrinsicOrThrow('JSON.stringify');

module.exports = JSONStringify;
