'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpGlobal = GetUncurriedThisIntrinsic('get RegExp.prototype.global');

module.exports = RegExpGlobal;
