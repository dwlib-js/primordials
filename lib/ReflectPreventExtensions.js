'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ReflectPreventExtensions = GetIntrinsicOrThrow('Reflect.preventExtensions');

module.exports = ReflectPreventExtensions;
