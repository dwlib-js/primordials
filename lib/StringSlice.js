'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringSlice = GetUncurriedThisIntrinsic('String.prototype.slice');

module.exports = StringSlice;
