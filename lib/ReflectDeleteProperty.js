'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ReflectDeleteProperty = GetIntrinsicOrThrow('Reflect.deleteProperty');

module.exports = ReflectDeleteProperty;
