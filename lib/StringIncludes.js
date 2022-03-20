'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringIncludes = GetUncurriedThisIntrinsic('String.prototype.includes');

module.exports = StringIncludes;
