'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArraySome = GetUncurriedThisIntrinsic('TypedArray.prototype.some');

module.exports = TypedArraySome;
