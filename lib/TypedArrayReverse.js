'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayReverse = GetUncurriedThisIntrinsic('TypedArray.prototype.reverse');

module.exports = TypedArrayReverse;
