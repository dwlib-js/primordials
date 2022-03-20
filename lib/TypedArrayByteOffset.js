'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayByteOffset = GetUncurriedThisIntrinsic('get TypedArray.prototype.byteOffset');

module.exports = TypedArrayByteOffset;
