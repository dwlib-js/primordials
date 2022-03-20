'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const WeakSetAdd = GetUncurriedThisIntrinsic('WeakSet.prototype.add');

module.exports = WeakSetAdd;
