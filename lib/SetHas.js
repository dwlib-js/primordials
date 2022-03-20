'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SetHas = GetUncurriedThisIntrinsic('Set.prototype.has');

module.exports = SetHas;
