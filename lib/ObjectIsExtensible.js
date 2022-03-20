'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ObjectIsExtensible = GetIntrinsicOrThrow('Object.isExtensible');

module.exports = ObjectIsExtensible;
