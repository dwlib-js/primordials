'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArraySort = GetUncurriedThisIntrinsic('TypedArray.prototype.sort');

module.exports = TypedArraySort;
