'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SetKeys = GetUncurriedThisIntrinsic('Set.prototype.keys');

module.exports = SetKeys;
