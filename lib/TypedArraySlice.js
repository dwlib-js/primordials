'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArraySlice = GetUncurriedThisIntrinsic('TypedArray.prototype.slice');

module.exports = TypedArraySlice;
