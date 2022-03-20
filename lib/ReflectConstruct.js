'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ReflectConstruct = GetIntrinsicOrThrow('Reflect.construct');

module.exports = ReflectConstruct;
