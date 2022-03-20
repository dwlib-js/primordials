'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayEntries = GetUncurriedThisIntrinsic('Array.prototype.entries');

module.exports = ArrayEntries;
