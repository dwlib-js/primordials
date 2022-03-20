'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayReduceRight = GetUncurriedThisIntrinsic('TypedArray.prototype.reduceRight');

module.exports = TypedArrayReduceRight;
