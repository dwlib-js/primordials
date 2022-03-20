'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ObjectGetOwnPropertySymbols = GetIntrinsicOrThrow('Object.getOwnPropertySymbols');

module.exports = ObjectGetOwnPropertySymbols;
