'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SetSize = GetUncurriedThisIntrinsic('get Set.prototype.size');

module.exports = SetSize;
