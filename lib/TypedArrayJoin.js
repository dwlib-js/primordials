'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayJoin = GetUncurriedThisIntrinsic('TypedArray.prototype.join');

module.exports = TypedArrayJoin;
