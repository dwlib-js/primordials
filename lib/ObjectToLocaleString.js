'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ObjectToLocaleString = GetUncurriedThisIntrinsic('Object.prototype.toLocaleString');

module.exports = ObjectToLocaleString;
