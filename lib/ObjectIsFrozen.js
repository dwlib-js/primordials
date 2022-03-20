'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ObjectIsFrozen = GetIntrinsicOrThrow('Object.isFrozen');

module.exports = ObjectIsFrozen;
