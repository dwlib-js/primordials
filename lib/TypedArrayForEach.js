'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayForEach = GetUncurriedThisIntrinsic('TypedArray.prototype.forEach');

module.exports = TypedArrayForEach;
