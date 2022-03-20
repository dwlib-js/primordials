'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayMap = GetUncurriedThisIntrinsic('TypedArray.prototype.map');

module.exports = TypedArrayMap;
