'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayFill = GetUncurriedThisIntrinsic('TypedArray.prototype.fill');

module.exports = TypedArrayFill;
