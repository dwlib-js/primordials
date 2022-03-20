'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringTrim = GetUncurriedThisIntrinsic('String.prototype.trim');

module.exports = StringTrim;
