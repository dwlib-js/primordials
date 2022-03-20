'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ReflectGetPrototypeOf = GetIntrinsicOrThrow('Reflect.getPrototypeOf');

module.exports = ReflectGetPrototypeOf;
