'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpTest = GetUncurriedThisIntrinsic('RegExp.prototype.test');

module.exports = RegExpTest;
