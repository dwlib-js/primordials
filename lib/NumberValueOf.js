'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const NumberValueOf = GetUncurriedThisIntrinsic('Number.prototype.valueOf');

module.exports = NumberValueOf;
