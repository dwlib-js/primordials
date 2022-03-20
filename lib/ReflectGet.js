'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ReflectGet = GetIntrinsicOrThrow('Reflect.get');

module.exports = ReflectGet;
