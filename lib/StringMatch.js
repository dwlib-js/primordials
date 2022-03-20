'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringMatch = GetUncurriedThisIntrinsic('String.prototype.match');

module.exports = StringMatch;
