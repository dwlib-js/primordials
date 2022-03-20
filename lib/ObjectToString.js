'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ObjectToString = GetUncurriedThisIntrinsic('Object.prototype.toString');

module.exports = ObjectToString;
