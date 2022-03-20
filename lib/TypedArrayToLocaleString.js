'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayToLocaleString = GetUncurriedThisIntrinsic('TypedArray.prototype.toLocaleString');

module.exports = TypedArrayToLocaleString;
