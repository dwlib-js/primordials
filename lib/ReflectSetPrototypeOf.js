'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ReflectSetPrototypeOf = GetIntrinsicOrThrow('Reflect.setPrototypeOf');

module.exports = ReflectSetPrototypeOf;
