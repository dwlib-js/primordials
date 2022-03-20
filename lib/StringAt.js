'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringAt = GetUncurriedThisIntrinsic('String.prototype.at');

module.exports = StringAt;
