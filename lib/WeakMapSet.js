'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const WeakMapSet = GetUncurriedThisIntrinsic('WeakMap.prototype.set');

module.exports = WeakMapSet;
