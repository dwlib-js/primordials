'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const WeakMapHas = GetUncurriedThisIntrinsic('WeakMap.prototype.has');

module.exports = WeakMapHas;
