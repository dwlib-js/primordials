'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArraySubarray = GetUncurriedThisIntrinsic('TypedArray.prototype.subarray');

module.exports = TypedArraySubarray;
