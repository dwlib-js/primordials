'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayCopyWithin = GetUncurriedThisIntrinsic('TypedArray.prototype.copyWithin');

module.exports = TypedArrayCopyWithin;
