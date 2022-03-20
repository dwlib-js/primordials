'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringIndexOf = GetUncurriedThisIntrinsic('String.prototype.indexOf');

module.exports = StringIndexOf;
