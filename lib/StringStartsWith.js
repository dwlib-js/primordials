'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringStartsWith = GetUncurriedThisIntrinsic('String.prototype.startsWith');

module.exports = StringStartsWith;
