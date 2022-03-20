'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringSubstring = GetUncurriedThisIntrinsic('String.prototype.substring');

module.exports = StringSubstring;
