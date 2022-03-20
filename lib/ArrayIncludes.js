'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayIncludes = GetUncurriedThisIntrinsic('Array.prototype.includes');

module.exports = ArrayIncludes;
