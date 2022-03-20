'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SetEntries = GetUncurriedThisIntrinsic('Set.prototype.entries');

module.exports = SetEntries;
