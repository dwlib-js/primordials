'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ObjectValueOf = GetUncurriedThisIntrinsic('Object.prototype.valueOf');

module.exports = ObjectValueOf;
