'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringCodePointAt = GetUncurriedThisIntrinsic('String.prototype.codePointAt');

module.exports = StringCodePointAt;
