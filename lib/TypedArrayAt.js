'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayAt = GetUncurriedThisIntrinsic('TypedArray.prototype.at');

module.exports = TypedArrayAt;
