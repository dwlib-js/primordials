'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpSource = GetUncurriedThisIntrinsic('get RegExp.prototype.source');

module.exports = RegExpSource;
