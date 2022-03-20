'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringConcat = GetUncurriedThisIntrinsic('String.prototype.concat');

module.exports = StringConcat;
