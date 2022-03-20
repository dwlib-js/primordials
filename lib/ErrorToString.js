'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ErrorToString = GetUncurriedThisIntrinsic('Error.prototype.toString');

module.exports = ErrorToString;
