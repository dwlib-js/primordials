'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayLength = GetUncurriedThisIntrinsic('get TypedArray.prototype.length');

module.exports = TypedArrayLength;
