'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayEvery = GetUncurriedThisIntrinsic('TypedArray.prototype.every');

module.exports = TypedArrayEvery;
