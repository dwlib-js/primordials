'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const WeakMapDelete = GetUncurriedThisIntrinsic('WeakMap.prototype.delete');

module.exports = WeakMapDelete;
