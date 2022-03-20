'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ReflectOwnKeys = GetIntrinsicOrThrow('Reflect.ownKeys');

module.exports = ReflectOwnKeys;
