'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayKeys = GetUncurriedThisIntrinsic('Array.prototype.keys');

module.exports = ArrayKeys;
