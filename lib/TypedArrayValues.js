'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayValues = GetUncurriedThisIntrinsic('TypedArray.prototype.values');

module.exports = TypedArrayValues;
