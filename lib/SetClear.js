'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SetClear = GetUncurriedThisIntrinsic('Set.prototype.clear');

module.exports = SetClear;
