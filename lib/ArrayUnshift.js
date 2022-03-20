'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayUnshift = GetUncurriedThisIntrinsic('Array.prototype.unshift');

module.exports = ArrayUnshift;
