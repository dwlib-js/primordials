'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringLastIndexOf = GetUncurriedThisIntrinsic('String.prototype.lastIndexOf');

module.exports = StringLastIndexOf;
