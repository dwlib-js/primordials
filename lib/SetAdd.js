'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SetAdd = GetUncurriedThisIntrinsic('Set.prototype.add');

module.exports = SetAdd;
