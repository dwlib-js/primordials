'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const WeakSetHas = GetUncurriedThisIntrinsic('WeakSet.prototype.has');

module.exports = WeakSetHas;
