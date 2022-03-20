'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const WeakSetDelete = GetUncurriedThisIntrinsic('WeakSet.prototype.delete');

module.exports = WeakSetDelete;
