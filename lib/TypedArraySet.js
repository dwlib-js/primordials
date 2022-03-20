'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArraySet = GetUncurriedThisIntrinsic('TypedArray.prototype.set');

module.exports = TypedArraySet;
