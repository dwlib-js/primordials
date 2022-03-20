'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ReflectApply = GetIntrinsicOrThrow('Reflect.apply');

module.exports = ReflectApply;
