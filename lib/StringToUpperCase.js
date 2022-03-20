'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringToUpperCase = GetUncurriedThisIntrinsic('String.prototype.toUpperCase');

module.exports = StringToUpperCase;
