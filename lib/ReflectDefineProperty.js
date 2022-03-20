'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ReflectDefineProperty = GetIntrinsicOrThrow('Reflect.defineProperty');

module.exports = ReflectDefineProperty;
