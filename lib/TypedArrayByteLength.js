'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayByteLength = GetUncurriedThisIntrinsic('get TypedArray.prototype.byteLength');

module.exports = TypedArrayByteLength;
