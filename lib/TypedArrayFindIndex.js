'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayFindIndex = GetUncurriedThisIntrinsic('TypedArray.prototype.findIndex');

module.exports = TypedArrayFindIndex;
