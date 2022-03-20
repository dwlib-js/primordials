'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ObjectIsSealed = GetIntrinsicOrThrow('Object.isSealed');

module.exports = ObjectIsSealed;
