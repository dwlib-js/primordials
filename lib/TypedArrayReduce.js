'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayReduce = GetUncurriedThisIntrinsic('TypedArray.prototype.reduce');

module.exports = TypedArrayReduce;
