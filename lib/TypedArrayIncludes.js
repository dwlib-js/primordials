'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayIncludes = GetUncurriedThisIntrinsic('TypedArray.prototype.includes');

module.exports = TypedArrayIncludes;
