'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayFind = GetUncurriedThisIntrinsic('TypedArray.prototype.find');

module.exports = TypedArrayFind;
