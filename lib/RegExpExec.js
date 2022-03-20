'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpExec = GetUncurriedThisIntrinsic('RegExp.prototype.exec');

module.exports = RegExpExec;
