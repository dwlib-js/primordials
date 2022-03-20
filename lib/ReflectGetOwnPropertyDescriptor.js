'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ReflectGetOwnPropertyDescriptor = GetIntrinsicOrThrow('Reflect.getOwnPropertyDescriptor');

module.exports = ReflectGetOwnPropertyDescriptor;
