'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const WeakMapGet = GetUncurriedThisIntrinsic('WeakMap.prototype.get');

module.exports = WeakMapGet;
