'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayIndexOf = GetUncurriedThisIntrinsic('TypedArray.prototype.indexOf');

module.exports = TypedArrayIndexOf;
