'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ReflectIsExtensible = GetIntrinsicOrThrow('Reflect.isExtensible');

module.exports = ReflectIsExtensible;
