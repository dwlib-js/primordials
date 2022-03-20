'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayAt = GetUncurriedThisIntrinsic('Array.prototype.at');

module.exports = ArrayAt;
