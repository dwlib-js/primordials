'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ReflectHas = GetIntrinsicOrThrow('Reflect.has');

module.exports = ReflectHas;
