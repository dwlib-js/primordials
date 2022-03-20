'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringValueOf = GetUncurriedThisIntrinsic('String.prototype.valueOf');

module.exports = StringValueOf;
