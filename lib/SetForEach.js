'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SetForEach = GetUncurriedThisIntrinsic('Set.prototype.forEach');

module.exports = SetForEach;
