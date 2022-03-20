'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayForEach = GetUncurriedThisIntrinsic('Array.prototype.forEach');

module.exports = ArrayForEach;
