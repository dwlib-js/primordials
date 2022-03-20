'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayLastIndexOf = GetUncurriedThisIntrinsic('Array.prototype.lastIndexOf');

module.exports = ArrayLastIndexOf;
