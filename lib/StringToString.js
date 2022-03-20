'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringToString = GetUncurriedThisIntrinsic('String.prototype.toString');

module.exports = StringToString;
