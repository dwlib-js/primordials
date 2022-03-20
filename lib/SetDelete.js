'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SetDelete = GetUncurriedThisIntrinsic('Set.prototype.delete');

module.exports = SetDelete;
